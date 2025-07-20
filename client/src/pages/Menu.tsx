import { useState } from "react";
import { motion } from "framer-motion";
import DishCard from "@/components/menu/DishCard";
import MenuFilter from "@/components/menu/MenuFilter";
import { menuItems, menuCategories } from "@/lib/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDishes = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(dish => dish.category === activeCategory);

  return (
    <div className="pt-24 pb-16 bg-warm-gray min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif text-gold mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our carefully curated selection of culinary masterpieces, 
            each dish crafted with the finest ingredients and presented with artistic precision.
          </motion.p>
        </div>

        {/* Category Filter */}
        <MenuFilter 
          categories={menuCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </motion.div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-charcoal rounded-2xl p-8 shadow-luxury max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-serif text-gold mb-4">Dietary Information</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white text-sm font-bold">
                  GF
                </div>
                <div className="text-cream/90">Gluten Free</div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto flex items-center justify-center text-white text-sm font-bold">
                  V
                </div>
                <div className="text-cream/90">Vegetarian</div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto flex items-center justify-center text-white text-sm font-bold">
                  VG
                </div>
                <div className="text-cream/90">Vegan</div>
              </div>
            </div>
            <p className="text-cream/80 mt-6 text-sm">
              Please inform our staff of any allergies or dietary requirements. 
              Our chefs are happy to accommodate special requests whenever possible.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
