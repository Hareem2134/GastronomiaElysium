// client\src\components\layout\MobileMenu.tsx

import { useState } from "react";
import { Link } from "wouter";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Define interfaces for better type safety (can be moved to a types.ts file if preferred)
interface NavItem {
  name: string;
  path: string;
  hasMegaMenu?: boolean;
}

interface MenuCategory {
  title: string;
  items: string[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  menuCategories: MenuCategory[];
}

const MobileMenu = ({ isOpen, onClose, navItems, menuCategories }: MobileMenuProps) => {
  const [activeMobileMenuCategory, setActiveMobileMenuCategory] = useState<string | null>(null);

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { type: "tween", duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", opacity: 0, transition: { type: "tween", duration: 0.3, ease: "easeIn" } },
  };

  const mobileCategoryVariants = {
    hidden: { height: 0, opacity: 0, overflow: 'hidden' },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const listVariants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      id="mobile-menu-overlay"
      className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden flex flex-col"
      variants={mobileMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex items-center justify-between p-6 border-b border-light-gray">
        <div className="text-2xl font-serif text-royal font-bold tracking-wide">Menu</div>
        <button
          className="text-royal p-2 focus:outline-none focus:ring-2 focus:ring-royal rounded-md"
          onClick={onClose}
          aria-label="Close mobile menu"
        >
          <X size={28} /> {/* Increased size to 28 for consistency with Header's button */}
        </button>
      </div>
      <motion.div
        className="flex-1 px-6 py-8 space-y-4 overflow-y-auto"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {navItems.map((item) => (
          <motion.div key={item.name} variants={itemVariants}>
            {item.hasMegaMenu ? (
              <>
                <button
                  className="flex items-center justify-between w-full text-left text-xl text-dark hover:text-royal transition-all duration-300 py-3"
                  onClick={() => setActiveMobileMenuCategory(
                    activeMobileMenuCategory === item.name ? null : item.name
                  )}
                  aria-expanded={activeMobileMenuCategory === item.name}
                  aria-controls={`mobile-menu-${item.name.toLowerCase()}`}
                >
                  {item.name}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeMobileMenuCategory === item.name ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeMobileMenuCategory === item.name && (
                    <motion.div
                      id={`mobile-menu-${item.name.toLowerCase()}`}
                      className="pl-4 pr-2 pt-2 pb-4 space-y-4 text-dark"
                      variants={mobileCategoryVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {menuCategories.map((category) => (
                        <div key={category.title} className="space-y-2">
                          <h4 className="font-semibold text-lg text-royal">{category.title}</h4>
                          <div className="space-y-1 text-base">
                            {category.items.map((menuItem) => (
                              <Link key={menuItem} href={`/menu#${menuItem.toLowerCase().replace(/\s/g, '-')}`}>
                                <a
                                  className="block text-gray-700 hover:text-royal transition-all duration-200 transform hover:translate-x-1"
                                  onClick={onClose}
                                >
                                  {menuItem}
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link href={item.path}>
                <div
                  className="block text-xl text-dark hover:text-royal transition-all duration-300 cursor-pointer transform hover:translate-x-2 py-3"
                  onClick={onClose}
                >
                  {item.name}
                </div>
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
      <div className="p-6 border-t border-light-gray">
        <Link href="/reservations">
          <Button
            className="w-full btn-royal animated-corners py-3 rounded-full font-semibold text-lg"
            onClick={onClose}
          >
            Reserve Table
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileMenu;