import { DishItem, dietaryInfo } from "@/lib/menuData";
import { motion } from "framer-motion";

interface DishCardProps {
  dish: DishItem;
  index: number;
}

const DishCard = ({ dish, index }: DishCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="enhanced-card animated-corners bg-white rounded-2xl overflow-hidden shadow-luxury border border-light-gray"
    >
      <div className="relative">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-64 object-cover"
        />
        {dish.featured && (
          <div className="absolute top-4 right-4 bg-royal text-white px-3 py-1 rounded-full text-sm font-semibold shadow-royal">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-royal mb-2">{dish.name}</h3>
        <p className="text-dark/80 mb-4 text-sm leading-relaxed">{dish.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-royal font-semibold text-lg">${dish.price}</span>
          <div className="flex space-x-2">
            {dish.dietary.map((dietary) => (
              <span
                key={dietary}
                className={`w-6 h-6 ${dietaryInfo[dietary as keyof typeof dietaryInfo]?.color || 'bg-gray-500'} rounded-full text-white text-xs flex items-center justify-center`}
                title={dietaryInfo[dietary as keyof typeof dietaryInfo]?.label || dietary}
              >
                {dietary.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;
