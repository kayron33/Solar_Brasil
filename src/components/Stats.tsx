import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Award, HeartPulse } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: '15000+',
      label: 'Pacientes Atendidos',
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      value: '25+',
      label: 'Anos de Experiência',
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: '18',
      label: 'Médicos Especialistas',
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      value: '98%',
      label: 'Taxa de Satisfação',
    },
  ];

  return (
    <section className="bg-primary-600 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-primary-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;