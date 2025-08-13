import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
  };

  const vite = await createViteServer({
    configFile: path.resolve(import.meta.dirname, '../vite.config.ts'),
        customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
      },
    },
    server: serverOptions,
    appType: "custom",
    root: path.resolve(import.meta.dirname, '../client'),
  });

  // Use vite as middleware
  app.use(vite.middlewares);

  // Serve index.html for all other routes to enable client-side routing in development
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
            // Path to the client's index.html template file for Vite to transform
      const clientTemplatePath = path.resolve(
        import.meta.dirname,
        "..", // Go up to the project root from 'server'
        "client", // Then into 'client'
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      // Read the index.html template
      let template = await fs.promises.readFile(clientTemplatePath, "utf-8");

      // Transform the HTML with Vite's development server, injecting HMR and env vars
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      // Vite's stack trace fixing for better error messages
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  // This is crucial for client-side routing in production (e.g., /about, /dashboard)
  app.use("*", (req, res) => {
    // Ensure we don't send index.html for API routes that might be 404s
    // (though the main Express router should handle all /api routes)
    if (req.url.startsWith('/api')) {
      // This case means an /api route wasn't matched by your registerRoutes.
      // You might want a more specific 404 for API, or just let Express handle it.
      // For now, this prevents sending HTML for an API call.
      res.status(404).json({ message: "API route not found" });
    } else {
      res.sendFile(path.resolve(distPath, "index.html"));
    }
  });
}
