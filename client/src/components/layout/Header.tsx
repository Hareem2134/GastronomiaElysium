import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      items: ["Oysters Rockefeller", "Foie Gras Terrine", "Caviar Service"]
    },
    {
      title: "Main Courses", 
      items: ["Wagyu Beef", "Lobster Thermidor", "Duck Confit"]
    },
    {
      title: "Desserts",
      items: ["Chocolate Soufflé", "Crème Brûlée", "Tarte Tatin"]
    },
    {
      title: "Wine Selection",
      items: ["Vintage Bordeaux", "Champagne", "Rare Whiskeys"]
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-charcoal/95 backdrop-blur-sm" : "bg-charcoal/90"
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="text-2xl font-serif text-gold font-bold cursor-pointer">
                Gastronomia Elysium
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link href={item.path}>
                    <span className={`nav-item py-2 cursor-pointer transition-colors duration-300 ${
                      location === item.path ? "text-gold" : "text-cream hover:text-gold"
                    }`}>
                      {item.name}
                      {item.hasMegaMenu && (
                        <i className="fas fa-chevron-down ml-1 text-xs"></i>
                      )}
                    </span>
                  </Link>
                  
                  {/* Mega Menu */}
                  {item.hasMegaMenu && (
                    <div className="mega-menu group-hover:opacity-100 group-hover:visible shadow-luxury">
                      <div className="grid grid-cols-4 gap-6 p-8">
                        {menuCategories.map((category) => (
                          <div key={category.title} className="space-y-3">
                            <h4 className="text-gold font-semibold">{category.title}</h4>
                            <div className="space-y-2 text-sm">
                              {category.items.map((item) => (
                                <a key={item} href="#" className="block hover:text-gold transition-colors cursor-pointer">
                                  {item}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link href="/reservations">
              <Button className="hidden lg:block btn-gold px-6 py-2 rounded-full font-semibold shadow-gold">
                Reserve Table
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-charcoal/95 backdrop-blur-sm z-40 lg:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6">
              <div className="text-xl font-serif text-gold">Menu</div>
              <button 
                className="text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  <div 
                    className="block text-xl text-cream hover:text-gold transition-colors cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
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
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reserve Table
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
