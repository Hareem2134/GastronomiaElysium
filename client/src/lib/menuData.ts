export interface DishItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary: string[];
  featured?: boolean;
}

export const menuCategories = [
  "All",
  "Appetizers", 
  "Mains",
  "Desserts",
  "Wines"
];

export const menuItems: DishItem[] = [
  {
    id: 1,
    name: "Lobster Thermidor Royal",
    description: "Fresh Atlantic lobster with truffle cream, aged Gruyère, and microgreens",
    price: 85,
    image: "https://images.unsplash.com/photo-1551229371-b45d1d46c4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Appetizers",
    dietary: ["gf"],
    featured: true
  },
  {
    id: 2,
    name: "Wagyu Perfection",
    description: "A5 Japanese Wagyu with roasted bone marrow and seasonal vegetables",
    price: 120,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Mains",
    dietary: ["gf"],
    featured: true
  },
  {
    id: 3,
    name: "Chocolate Symphony",
    description: "Dark chocolate soufflé with gold leaf, berry compote, and vanilla bean ice cream",
    price: 32,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Desserts",
    dietary: ["v"],
    featured: true
  },
  {
    id: 4,
    name: "Oysters Rockefeller",
    description: "Blue Point oysters with spinach, herbs, and Pernod cream",
    price: 24,
    image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Appetizers",
    dietary: ["gf"]
  },
  {
    id: 5,
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry gastrique and fondant potato",
    price: 68,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Mains",
    dietary: ["gf"]
  },
  {
    id: 6,
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar and fresh berries",
    price: 18,
    image: "https://images.unsplash.com/photo-1587132208109-4fa8b0749c7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Desserts",
    dietary: ["v", "gf"]
  },
  {
    id: 7,
    name: "Vintage Bordeaux",
    description: "Château Margaux 2005 - Full-bodied with notes of blackcurrant and oak",
    price: 450,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Wines",
    dietary: []
  },
  {
    id: 8,
    name: "Foie Gras Terrine",
    description: "House-made terrine with port wine reduction and brioche toast",
    price: 42,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Appetizers",
    dietary: []
  }
];

export const dietaryInfo = {
  gf: { label: "Gluten Free", color: "bg-green-500" },
  v: { label: "Vegetarian", color: "bg-orange-500" },
  vg: { label: "Vegan", color: "bg-blue-500" },
};
