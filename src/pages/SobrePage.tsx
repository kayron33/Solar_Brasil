import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Stats from '../components/Stats';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const SobrePage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={pageVariants}
    >
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-lg text-primary-600 font-medium mb-3">Sobre Nós</h5>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Nossa Missão é Cuidar da Sua Saúde
              </h1>
              <p className="text-gray-700 mb-6 text-lg">
                Fundada em 2000, a Clínica Saúde Premium nasceu do sonho de oferecer atendimento médico de qualidade 
                excepcional combinado com um tratamento humanizado e tecnologia de ponta.
              </p>
              <p className="text-gray-700 mb-8">
                Ao longo desses anos, nos tornamos referência em cuidados médicos em São Paulo, 
                com uma equipe de mais de 50 médicos especialistas e centenas de colaboradores
                dedicados a proporcionar a melhor experiência para nossos pacientes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium mb-1">Atendimento de excelência</h3>
                    <p className="text-gray-600 text-sm">Foco total na satisfação do paciente</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium mb-1">Profissionais qualificados</h3>
                    <p className="text-gray-600 text-sm">Equipe médica de referência</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium mb-1">Tecnologia de ponta</h3>
                    <p className="text-gray-600 text-sm">Equipamentos modernos e atualizados</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium mb-1">Instalações confortáveis</h3>
                    <p className="text-gray-600 text-sm">Ambiente projetado para seu bem-estar</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg" 
                  alt="Clínica Saúde Premium" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <h4 className="font-semibold text-primary-600 mb-2">Nossa História</h4>
                <p className="text-gray-700 text-sm">
                  Mais de duas décadas dedicadas à saúde e bem-estar dos nossos pacientes, 
                  com qualidade e inovação constante.
                </p>
              </div>
            </motion.div>
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Nossos <span className="text-primary-600">Valores</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Nossos valores são os pilares que fundamentam todas as nossas ações e decisões,
              garantindo um atendimento de qualidade e humanizado.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excelência</h3>
              <p className="text-gray-700">
                Buscamos a perfeição em todos os processos, desde o agendamento até o 
                pós-atendimento, garantindo a melhor experiência para nossos pacientes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ética</h3>
              <p className="text-gray-700">
                Atuamos com transparência, honestidade e respeito em todas as relações, 
                priorizando sempre o bem-estar e a segurança dos nossos pacientes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inovação</h3>
              <p className="text-gray-700">
                Investimos continuamente em tecnologias e métodos avançados para 
                oferecer diagnósticos precisos e tratamentos eficazes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary-50 p-6 rounded-xl"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Humanização</h3>
              <p className="text-gray-700">
                Tratamos cada paciente como único, com empatia, acolhimento e atenção 
                individualizada em todas as etapas do atendimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Stats />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-heading text-3xl font-bold mb-4">
                Nossa Infraestrutura
              </h2>
              <p className="text-gray-600">
                Contamos com instalações modernas e acolhedoras projetadas para oferecer
                o máximo conforto e segurança para nossos pacientes.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img 
                  src="https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg" 
                  alt="Recepção da clínica" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Recepção Acolhedora</h3>
                  <p className="text-gray-600 text-sm">Ambiente confortável para uma recepção calorosa</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img 
                  src="https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg" 
                  alt="Consultório médico" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Consultórios Modernos</h3>
                  <p className="text-gray-600 text-sm">Espaços equipados com tecnologia de ponta</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img 
                  src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg" 
                  alt="Sala de exames" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Centro de Diagnósticos</h3>
                  <p className="text-gray-600 text-sm">Equipamentos avançados para exames precisos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SobrePage;