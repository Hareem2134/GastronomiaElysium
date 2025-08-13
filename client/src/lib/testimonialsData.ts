// client/src/lib/testimonialsData.ts

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    location: string;
    rating: number; // 1-5 stars
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: "t1",
      quote: "Dining at Royal Cuisine Palace was an unforgettable experience. Every dish was a culinary masterpiece, and the ambiance was simply breathtaking. Highly recommend for a special occasion!",
      author: "Eleanor Vance",
      location: "New York, USA",
      rating: 5,
    },
    {
      id: "t2",
      quote: "The attention to detail and impeccable service truly set this restaurant apart. Chef Dubois' creations are truly exceptional. A must-visit for any food enthusiast.",
      author: "Marcus Thorne",
      location: "London, UK",
      rating: 5,
    },
    {
      id: "t3",
      quote: "From the appetizers to the dessert, everything was perfect. The wine pairing was exquisite. Gastronomia Elysium delivers an unparalleled fine dining experience.",
      author: "Sophia Laurent",
      location: "Paris, France",
      rating: 5,
    },
    {
      id: "t4",
      quote: "I've travelled the world seeking unique culinary experiences, and Royal Cuisine Palace stands among the very best. A true gem!",
      author: "Dr. Alistair Finch",
      location: "Tokyo, Japan",
      rating: 4,
    },
    {
      id: "t5",
      quote: "An evening of pure indulgence. The flavors were bold yet harmonious, and the presentation was artful. This is what fine dining is all about.",
      author: "Isabella Moretti",
      location: "Rome, Italy",
      rating: 5,
    },
  ];