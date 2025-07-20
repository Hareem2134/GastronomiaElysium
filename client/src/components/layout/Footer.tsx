import { useState } from "react";
import { Link } from "wouter";
import { ArrowUp, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const res = await apiRequest("POST", "/api/newsletter", { email });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const quickLinks = [
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Story", path: "/story" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <section className="py-16 bg-royal">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-serif text-white mb-4">Stay Connected</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive updates on seasonal menus, special events, and culinary experiences.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-l-lg border-none focus:outline-none bg-white text-dark"
              required
            />
            <Button 
              type="submit"
              disabled={newsletterMutation.isPending}
              className="bg-white text-royal px-6 py-3 rounded-r-lg hover:bg-off-white transition-colors"
            >
              {newsletterMutation.isPending ? "..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-serif text-royal mb-4">Royal Cuisine Palace</div>
              <p className="text-dark/80 mb-6 leading-relaxed">
                Where culinary artistry meets unparalleled elegance. Experience dining redefined.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-royal hover:text-[hsl(var(--royal-blue-light))] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-royal hover:text-[hsl(var(--royal-blue-light))] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-royal hover:text-[hsl(var(--royal-blue-light))] transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-royal font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link key={link.name} href={link.path}>
                    <span className="block text-dark/80 hover:text-royal transition-colors cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-royal font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-dark/80">
                <div>123 Royal Palace Drive</div>
                <div>Metropolitan District, NY 10001</div>
                <div>+1 (555) 123-4567</div>
                <div>reservations@royalcuisine.com</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-royal/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-dark/60">
              © 2024 Royal Cuisine Palace. All rights reserved.
            </div>
            <Button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-royal text-white p-2 rounded-full hover:bg-[hsl(var(--royal-blue-light))] transition-all duration-300"
              size="icon"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
