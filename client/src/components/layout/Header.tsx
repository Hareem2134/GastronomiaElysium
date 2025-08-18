// client\src\components\layout\Header.tsx

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import MobileMenu from "./MobileMenu";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  // --- Event Listeners and State Management ---

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  // Handle clicks outside the mega menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        menuTriggerRef.current &&
        !menuTriggerRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  // --- Data for Navigation ---

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu", hasMegaMenu: true },
    { name: "Reservations", path: "/reservations" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Story", path: "/story" },
    { name: "Contact", path: "/contact" },
  ];

  const menuCategories = [
    { title: "Appetizers", items: ["Oysters Rockefeller", "Foie Gras Terrine", "Caviar Service"] },
    { title: "Main Courses", items: ["Wagyu Beef", "Lobster Thermidor", "Duck Confit"] },
    { title: "Desserts", items: ["Chocolate Soufflé", "Crème Brûlée", "Tarte Tatin"] },
    { title: "Wine Selection", items: ["Vintage Bordeaux", "Champagne", "Rare Whiskeys"] },
  ];

  // --- Animation Variants ---

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" as const },
    visible: { opacity: 1, y: 0, pointerEvents: "auto" as const, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };
  
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
        onMouseLeave={() => setIsMegaMenuOpen(false)} // Close menu when mouse leaves the entire header
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="font-serif text-2xl font-bold text-charcoal cursor-pointer">
              Gastronomia Elysium
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasMegaMenu ? (
                  <button
                    ref={menuTriggerRef}
                    onClick={() => setIsMegaMenuOpen(prev => !prev)}
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    className={`flex items-center transition-colors duration-200 ${
                      isMegaMenuOpen ? "text-gold" : "text-charcoal"
                    } hover:text-gold`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link href={item.path}>
                    <a className="text-charcoal hover:text-gold transition-colors duration-200">
                      {item.name}
                    </a>
                  </Link>
                )}
              </div>
            ))}
             <Link href="/reservations">
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button>Reserve Table</Button>
                </motion.div>
             </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* 🌟 ADDED: The Missing Mega Menu Panel 🌟 */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            ref={megaMenuRef}
            variants={megaMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-20 left-0 w-full bg-white shadow-lg z-20"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <div className="container mx-auto grid grid-cols-4 gap-8 px-6 py-8">
              {menuCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item}>
                        <Link href="/menu">
                          <a className="text-gray-600 hover:text-gold transition-colors duration-200">
                            {item}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={navItems}
            menuCategories={menuCategories}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;