import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, image, testimonial, rating }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-6 shadow-card"
    >
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </motion.div>
  );
};

export default TestimonialCard;