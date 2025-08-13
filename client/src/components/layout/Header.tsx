// client\src\components\layout\Header.tsx

import { useState, useEffect, useRef, useCallback } from "react"; // Added useCallback
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion";

import MobileMenu from "./MobileMenu";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const megaMenuHoverTimeoutRef = useRef<number | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null); // Ref for the 'Menu' button

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    if (isMegaMenuOpen) {
      setIsMegaMenuOpen(false);
    }
  }, [location]);

  const isTabletOrMobile = () => window.innerWidth < 768;

  const handleMegaMenuMouseEnter = useCallback(() => { // Memoize with useCallback
    if (!isTabletOrMobile()) {
      if (megaMenuHoverTimeoutRef.current) {
        clearTimeout(megaMenuHoverTimeoutRef.current);
        megaMenuHoverTimeoutRef.current = null;
      }
      setIsMegaMenuOpen(true);
    }
  }, []); // Empty dependency array as it only depends on isTabletOrMobile (which doesn't change during render)

  const handleMegaMenuMouseLeave = useCallback(() => { // Memoize with useCallback
    if (!isTabletOrMobile()) {
      megaMenuHoverTimeoutRef.current = setTimeout(() => {
        setIsMegaMenuOpen(false);
      }, 150) as unknown as number;
    }
  }, []);

  // Dedicated click handler for the 'Menu' button/area
  const handleMenuToggle = useCallback((e: React.MouseEvent) => { // Memoize with useCallback
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling up to document click listener
    console.log('Menu item toggle clicked!'); // Debugging log
    setIsMegaMenuOpen(prev => {
      console.log('Toggling mega menu from:', prev, 'to:', !prev); // Debugging log
      return !prev;
    });
  }, []); // Empty dependency array

  // Close mega menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Add a small delay for click events to propagate state changes first
      // This is crucial for fixing the "menu opens then immediately closes" issue
      setTimeout(() => {
        if (
          isMegaMenuOpen && // Only check if menu is actually open
          megaMenuRef.current &&
          !megaMenuRef.current.contains(event.target as Node) &&
          menuTriggerRef.current &&
          !menuTriggerRef.current.contains(event.target as Node)
        ) {
          console.log('Clicked outside, closing mega menu.'); // Debugging log
          setIsMegaMenuOpen(false);
        }
      }, 50); // A small delay (e.g., 50ms)
    };

    if (isMegaMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMegaMenuOpen]); // Dependency array should be fine here

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu", hasMegaMenu: true },
    { name: "Reservations", path: "/reservations" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Story", path: "/story" },
    { name: "Contact", path: "/contact" },
  ];

  const menuCategories = [
    {
      title: "Appetizers",
      items: ["Oysters Rockefeller", "Foie Gras Terrine", "Caviar Service"],
    },
    {
      title: "Main Courses",
      items: ["Wagyu Beef", "Lobster Thermidor", "Duck Confit"],
    },
    {
      title: "Desserts",
      items: ["Chocolate Soufflé", "Crème Brûlée", "Tarte Tatin"],
    },
    {
      title: "Wine Selection",
      items: ["Vintage Bordeaux", "Champagne", "Rare Whiskeys"],
    },
  ];

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" as const },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      pointerEvents: "none" as const,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  } as const satisfies Variants;

  const buttonVariants = {
    rest: { scale: 1, transition: { duration: 0.2 } },
    hover: {
      scale: 1.05,
      boxShadow: "0 4px 15px rgba(36, 62, 92, 0.25)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence>
      <nav
        className={`fixed top-0 w-full z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-xl border-b border-light-gray"
            : "bg-white/90"
        }`}
        role="navigation"
      >
        <div className="container mx-auto px-6 py-3 md:py-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Apply new responsive font class */}
            <Link href="/">
              <div className="flex items-center h-full font-serif text-royal font-bold cursor-pointer transition-colors duration-300 hover:text-[hsl(var(--royal-blue-dark))] tracking-wide text-nav-logo">
                Royal Cuisine Palace
              </div>
            </Link>

            {/* Combined Desktop Navigation & CTA Button */}
            <div className="hidden md:flex items-center h-full min-w-0">

              {/* Desktop Navigation Links - Apply new responsive font class and tighter spacing */}
              <div className="flex items-center md:space-x-1 lg:space-x-2 xl:space-x-3 h-full md:mr-1 lg:mr-2 xl:mr-3 min-w-0">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative group h-full flex items-center whitespace-nowrap overflow-hidden text-ellipsis"
                    onMouseEnter={item.name === "Menu" ? handleMegaMenuMouseEnter : undefined}
                    onMouseLeave={item.name === "Menu" ? handleMegaMenuMouseLeave : undefined}
                    onClick={item.name === "Menu" ? handleMenuToggle : undefined}
                  >
                    {item.hasMegaMenu ? (
                      <button
                        ref={menuTriggerRef} // Ref on the button itself
                        className={`
                          flex items-center px-0.5 relative transition-colors duration-300 h-full
                          text-nav-item
                          outline-none focus:outline-none focus:ring-0 focus:shadow-none active:shadow-none
                          ${isMegaMenuOpen ? "text-royal" : "text-dark"}
                          hover:text-[hsl(var(--royal-blue-dark))]
                        `}
                        aria-haspopup="true"
                        aria-expanded={isMegaMenuOpen}
                        tabIndex={0}
                      >
                        {item.name}
                        <ChevronDown
                          size={14}
                          className={`ml-1 inline-block transition-transform duration-200 ${
                            isMegaMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span className={`
                            absolute bottom-0 left-0 w-full h-[2px] bg-royal transform origin-left transition-all duration-300
                            ${isMegaMenuOpen || location.startsWith(item.path) ? "scale-x-100" : "scale-x-0"}
                            group-hover:scale-x-100
                        `} />
                      </button>
                    ) : (
                      <Link href={item.path}>
                        <span
                          className={`
                            flex items-center px-0.5 relative cursor-pointer transition-colors duration-300 h-full
                            text-nav-item
                            outline-none focus:outline-none focus:ring-0 focus:shadow-none active:shadow-none
                            ${location === item.path ? "text-royal" : "text-dark"}
                            hover:text-[hsl(var(--royal-blue-dark))]
                          `}
                          tabIndex={0}
                        >
                          {item.name}
                          <span className={`
                              absolute bottom-0 left-0 w-full h-[2px] bg-royal transform origin-left transition-all duration-300
                              ${location === item.path ? "scale-x-100" : "scale-x-0"}
                              group-hover:scale-x-100
                          `} />
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/reservations">
                <motion.div className="flex items-center h-full flex-shrink-0"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button className="btn-royal animated-corners px-2 py-2 rounded-full font-semibold text-sm md:text-sm lg:text-base">
                    Reserve Table
                  </Button>
                </motion.div>
              </Link>

            </div> {/* End of Combined Desktop Navigation & CTA Button */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-royal p-2 focus:outline-none focus:ring-2 focus:ring-royal rounded-md flex items-center h-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-overlay"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay Component */}
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
    </AnimatePresence>
  );
};

export default Header;