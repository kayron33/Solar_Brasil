import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, Brain, Microscope, Activity, Baby, 
         UserCheck, Bone, Eye, FirstAid, Clipboard, Pills } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const ServicosPage: React.FC = () => {
  const services = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Cardiologia',
      description: 'Diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório.',
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Clínica Geral',
      description: 'Atendimento médico completo para diagnósticos precisos e tratamentos eficazes para diversas condições de saúde.',
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Neurologia',
      description: 'Especialidade médica que trata dos distúrbios anatômicos, fisiológicos do sistema nervoso central e periférico.',
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'Exames Laboratoriais',
      description: 'Ampla variedade de exames com equipamentos modernos e resultados rápidos e precisos para diagnósticos eficazes.',
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: 'Check-up Completo',
      description: 'Avaliação completa da sua saúde para prevenção e diagnóstico precoce de doenças com acompanhamento especializado.',
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: 'Pediatria',
      description: 'Cuidados médicos especializados para crianças, desde o nascimento até a adolescência, focados no desenvolvimento saudável.',
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'Geriatria',
      description: 'Assistência médica especializada para idosos, tratando as doenças típicas do envelhecimento com dignidade e respeito.',
    },
    {
      icon: <Bone className="h-6 w-6" />,
      title: 'Ortopedia',
      description: 'Diagnóstico e tratamento de doenças e lesões nos ossos, articulações, músculos, ligamentos e tendões.',
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Oftalmologia',
      description: 'Cuidados completos para a saúde dos olhos, desde exames de rotina até tratamentos para doenças oculares complexas.',
    },
    {
      icon: <FirstAid className="h-6 w-6" />,
      title: 'Dermatologia',
      description: 'Diagnóstico e tratamento de doenças relacionadas à pele, cabelo e unhas, com abordagens clínicas e estéticas.',
    },
    {
      icon: <Clipboard className="h-6 w-6" />,
      title: 'Nutrição',
      description: 'Orientação nutricional personalizada para manutenção da saúde, perda de peso e tratamento de doenças relacionadas à alimentação.',
    },
    {
      icon: <Pills className="h-6 w-6" />,
      title: 'Endocrinologia',
      description: 'Especialidade médica que trata dos distúrbios hormonais e metabólicos, como diabetes, problemas de tireoide e obesidade.',
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={pageVariants}
    >
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-primary-600">Serviços</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Oferecemos uma ampla gama de serviços médicos especializados com 
              profissionais renomados e equipamentos de última geração para cuidar 
              da sua saúde de forma completa e integrada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-50 p-8 md:p-12 rounded-2xl"
          >
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Excelência em Diagnósticos
              </h2>
              <p className="text-gray-700">
                Nossa clínica oferece equipamentos de diagnóstico de última geração para garantir
                resultados precisos e confiáveis para nossos pacientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Exames de Imagem</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Raio-X Digital</li>
                  <li>• Ultrassonografia</li>
                  <li>• Tomografia Computadorizada</li>
                  <li>• Ressonância Magnética</li>
                  <li>• Densitometria Óssea</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Exames Cardiológicos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Eletrocardiograma</li>
                  <li>• Ecocardiograma</li>
                  <li>• Teste Ergométrico</li>
                  <li>• Holter 24h</li>
                  <li>• MAPA (Monitorização da Pressão)</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">Exames Laboratoriais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hemograma Completo</li>
                  <li>• Perfil Lipídico</li>
                  <li>• Glicemia</li>
                  <li>• Função Hepática e Renal</li>
                  <li>• Hormonais</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <CTASection />
    </motion.div>
  );
};

export default ServicosPage;