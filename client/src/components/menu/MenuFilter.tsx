import { motion } from "framer-motion";

interface MenuFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const MenuFilter = ({ categories, activeCategory, onCategoryChange }: MenuFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category
              ? "bg-gold text-charcoal shadow-gold"
              : "bg-warm-gray text-cream hover:bg-gold hover:text-charcoal"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default MenuFilter;
