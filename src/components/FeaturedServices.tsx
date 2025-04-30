import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, Brain, Microscope, Activity, Baby } from 'lucide-react';
import ServiceCard from './ServiceCard';

const FeaturedServices: React.FC = () => {
  const services = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Cardiologia',
      description: 'Cuidados especializados para a saúde do seu coração com os melhores cardiologistas.',
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Clínica Geral',
      description: 'Atendimento médico completo para diagnósticos precisos e tratamentos eficazes.',
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Neurologia',
      description: 'Tratamentos avançados para distúrbios do sistema nervoso com especialistas renomados.',
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'Exames Laboratoriais',
      description: 'Laboratório completo com equipamentos de última geração para resultados precisos.',
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: 'Check-up Completo',
      description: 'Avaliação completa da sua saúde para prevenção e diagnóstico precoce de doenças.',
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: 'Pediatria',
      description: 'Cuidados especiais para a saúde das crianças, desde recém-nascidos até adolescentes.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-primary-600">Serviços</span> Especializados
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos uma ampla gama de serviços médicos de alta qualidade, 
            utilizando tecnologia de ponta e profissionais experientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;