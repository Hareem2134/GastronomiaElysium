export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export const galleryCategories = [
  "All",
  "Food",
  "Ambiance", 
  "Events",
  "Team"
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Elegant Table Setting",
    category: "Ambiance",
    description: "Fine dining table setup with crystal glasses and premium tableware"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Restaurant Interior",
    category: "Ambiance",
    description: "Luxury restaurant interior with warm ambient lighting"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Dining Room",
    category: "Ambiance",
    description: "Panoramic view of our sophisticated dining room"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Artistic Dessert",
    category: "Food",
    description: "Gourmet dessert with artistic presentation"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1707995546408-9815c70dd5c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Signature Lobster Dish",
    category: "Food",
    description: "Our famous lobster dish with premium accompaniments"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Chef in Action",
    category: "Team",
    description: "Our executive chef preparing gourmet cuisine"
  },
  {
    id: 7,
    url: "https://plus.unsplash.com/premium_photo-1676651534759-5556422fa93d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    title: "Master Chef Alexandre",
    category: "Team",
    description: "Executive Chef Alexandre Dubois focused on culinary excellence."
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Private Dining Event",
    category: "Events",
    description: "Exclusive private dining experience for special occasions"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Wine Tasting Event",
    category: "Events",
    description: "Sommelier-led wine tasting in our private cellar"
  }
];
