import React from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import { Calendar, Shield, Clock, HeadsetIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedItem: React.FC<{ icon: React.ReactNode; title: string; description: string; delay?: number }> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeaturedItem
              icon={<Calendar size={28} />}
              title="Agendamento Rápido"
              description="Marque sua consulta de forma simples e rápida, com horários flexíveis."
              delay={0.1}
            />
            <FeaturedItem
              icon={<Shield size={28} />}
              title="Profissionais Qualificados"
              description="Equipe médica especializada e constantemente atualizada."
              delay={0.2}
            />
            <FeaturedItem
              icon={<Clock size={28} />}
              title="Atendimento no Horário"
              description="Respeitamos seu tempo com pontualidade e eficiência."
              delay={0.3}
            />
            <FeaturedItem
              icon={<HeadsetIcon size={28} />}
              title="Suporte ao Paciente"
              description="Assistência completa antes, durante e após o atendimento."
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      <FeaturedServices />
      
      <Testimonials />
      
      <Stats />
      
      <CTASection />
    </>
  );
};

export default HomePage;