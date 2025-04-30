import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  delay?: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl overflow-hidden shadow-card group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-3">
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;