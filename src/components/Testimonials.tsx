import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ana Carolina Silva',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      testimonial: 'Atendimento excepcional! Os médicos são muito atenciosos e dedicados. Me senti muito bem cuidada e acolhida durante todo o tratamento.',
      rating: 5,
    },
    {
      name: 'Carlos Eduardo Mendes',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      testimonial: 'Clínica de alto padrão com excelentes profissionais. O Dr. Roberto resolveu meu problema que já se arrastava há anos. Recomendo muito!',
      rating: 5,
    },
    {
      name: 'Mariana Alves',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      testimonial: 'Instalações modernas e equipe muito preparada. O atendimento foi rápido e eficiente, e o diagnóstico preciso. Voltarei com certeza!',
      rating: 4,
    },
    {
      name: 'Pedro Henrique Costa',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      testimonial: 'Recomendo a Clínica Saúde Premium para quem busca atendimento de qualidade. Tudo muito organizado e profissional desde a recepção.',
      rating: 5,
    },
    {
      name: 'Juliana Freitas',
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
      testimonial: 'Minha experiência foi incrível! Ambiente agradável, médicos competentes e resultados excelentes. Já indiquei para toda minha família.',
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-primary-600">pacientes</span> dizem
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça a experiência de quem já passou por nossos cuidados e 
            comprove a qualidade dos nossos serviços.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10">
            <button 
              onClick={prev}
              className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary-500 hover:text-white transition-colors -translate-x-6"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary-500 hover:text-white transition-colors translate-x-6"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${current * (100 / 3)}%` }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[calc(33.333%-16px)]">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;