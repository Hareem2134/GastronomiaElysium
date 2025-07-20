import { useState } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Story", path: "/story" },
    { name: "Contact", path: "/contact" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-charcoal z-40 transform transition-transform duration-300 lg:hidden">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6">
          <div className="text-xl font-serif text-gold">Menu</div>
          <button onClick={onClose} className="text-gold">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 px-6 py-8 space-y-6">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.path}>
              <div 
                className="block text-xl text-cream hover:text-gold transition-colors cursor-pointer animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={onClose}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="p-6">
          <Link href="/reservations">
            <Button 
              className="w-full btn-gold py-3 rounded-full font-semibold"
              onClick={onClose}
            >
              Reserve Table
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
