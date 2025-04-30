import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="card group hover:bg-primary-600 hover:text-white transition-all duration-300"
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 group-hover:bg-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-white">{title}</h3>
      <p className="text-gray-600 mb-4 group-hover:text-primary-100">{description}</p>
      <button className="text-primary-600 font-medium inline-flex items-center group-hover:text-white">
        Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;