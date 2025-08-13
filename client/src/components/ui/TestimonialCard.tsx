// client/src/components/ui/TestimonialCard.tsx

import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/testimonialsData'; // Adjust path if needed

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 enhanced-card flex flex-col h-full animated-corners transition-all duration-300 hover:shadow-xl">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`fill-current ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 text-lg italic leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </p>
      <div className="font-semibold text-dark text-xl">
        {testimonial.author}
      </div>
      <div className="text-sm text-gray-500 mt-1">
        {testimonial.location}
      </div>
    </div>
  );
};

export default TestimonialCard;