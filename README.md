# Royal Cuisine Palace - Luxury Restaurant Website

## Overview

This is a high-end luxury restaurant website built with modern web technologies, featuring an immersive dining experience with sophisticated animations, elegant UI components, and full restaurant management capabilities. The application showcases "Royal Cuisine Palace," a fictional fine dining establishment with three Michelin stars, featuring a clean white background with royal blue color theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom luxury restaurant theme (royal blue, white, light gray color palette)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Animations**: Framer Motion for smooth page transitions and micro-interactions
- **State Management**: TanStack React Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API endpoints for reservations, contact messages, and newsletter subscriptions
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Vite for fast development and hot module replacement

### Build System
- **Bundler**: Vite for frontend development and building
- **Backend Build**: esbuild for fast server-side bundling
- **TypeScript**: Full TypeScript support across client and server
- **Development**: TSX for running TypeScript directly in development

## Key Components

### Database Schema
- **Users**: Basic user authentication system
- **Reservations**: Customer reservation management with status tracking
- **Contact Messages**: Customer inquiries and feedback
- **Newsletter Subscriptions**: Email marketing subscription system

### Frontend Components
- **Layout**: Header with mega menu, mobile navigation, footer with newsletter signup
- **Pages**: Home, Menu, Reservations, Gallery, Story, Contact
<!-- - **UI Enhancements**: Custom cursor, preloader, scroll progress indicator, audio controls, cookie banner -->
- **Forms**: Reservation booking, contact form, newsletter subscription
- **Gallery**: Lightbox gallery with category filtering
- **Menu**: Interactive menu with filtering and dietary information

### API Endpoints
- `POST /api/reservations` - Create new reservation
- `GET /api/reservations` - List all reservations
- `GET /api/reservations/:id` - Get specific reservation
- `POST /api/contact` - Submit contact message
- `POST /api/newsletter` - Subscribe to newsletter

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **Server Processing**: Express.js routes handle requests and validate data using Zod schemas
3. **Database Operations**: Drizzle ORM performs type-safe database operations
4. **Response Caching**: React Query caches responses for optimal performance
5. **UI Updates**: Components automatically re-render when data changes

The application uses optimistic updates for better user experience, with automatic error handling and retry mechanisms.

## External Dependencies

### Core Framework Dependencies
- React 18+ with TypeScript support
- Express.js for backend server
- Drizzle ORM with PostgreSQL dialect
- Neon Database for serverless PostgreSQL hosting

### UI and Animation Libraries
- Radix UI primitives for accessible components
- Framer Motion for animations and transitions
- Tailwind CSS for utility-first styling
- Custom fonts: Playfair Display (serif) and Inter (sans-serif)

### Development Tools
- Vite for development server and building
- TypeScript for type safety
- ESBuild for backend bundling
- PostCSS with Autoprefixer for CSS processing

### Form and Validation
- React Hook Form for form management
- Zod for schema validation and type inference
- Hookform/resolvers for Zod integration

## Deployment Strategy

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Single deployment artifact with both client and server

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Drizzle migrations stored in `./migrations` directory
- Production mode determined by `NODE_ENV=production`

### Development Workflow
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run db:push` - Push database schema changes
- `npm run check` - Type checking

The application is structured for easy deployment to platforms like Vercel, or any Node.js hosting environment with PostgreSQL support. The monorepo structure keeps client, server, and shared code organized while maintaining type safety across the entire stack.

## Recent Changes

- **Design Update (January 2025)**: Changed from dark theme (gold/charcoal) to clean white background with royal blue color scheme
- **Project Rename**: Updated from "Gastronomia Elysium" to "Royal Cuisine Palace" 
- **Color Theme**: Implemented royal blue (#245DC1) as primary color with white backgrounds and light gray accents
- **Component Updates**: Updated all UI components, buttons, navigation, and typography to use new color scheme

### Performance Considerations
- Image optimization through proper sizing and lazy loading
- Component-level code splitting for faster initial loads
- Efficient caching strategy with React Query
- Minimal bundle size through tree shaking and modern build tools
- Server-side rendering preparation through Vite SSR support