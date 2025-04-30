import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div 
        className="container-custom bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M42.8,-68.7C54.8,-62.9,63.4,-49.4,70.2,-35.1C77,-20.7,81.9,-5.5,79.2,8.2C76.6,21.9,66.3,34,55.4,45.1C44.5,56.2,33,66.3,19.1,72.6C5.3,78.9,-10.8,81.5,-24.8,76.7C-38.8,71.8,-50.8,59.6,-59.3,45.9C-67.8,32.2,-72.8,17.1,-74.3,1.5C-75.8,-14.1,-73.9,-29.8,-66.1,-42C-58.4,-54.2,-44.8,-63.1,-31.3,-68C-17.8,-73,-4.4,-74.1,9,-72.3C22.5,-70.5,30.7,-74.5,42.8,-68.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 relative z-10">
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Cuide da sua saúde com quem entende do assunto
            </motion.h2>
            
            <motion.p 
              className="text-primary-100 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nossa equipe de especialistas está pronta para oferecer o melhor atendimento 
              com toda a atenção que você merece. Agende sua consulta hoje mesmo!
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/agendamento" className="btn bg-white text-primary-600 hover:bg-gray-100">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href="tel:+551199999999" className="btn bg-primary-700 text-white hover:bg-primary-800">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  (11) 9999-9999
                </a>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Agende sua consulta</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Especialidade</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="">Selecione uma especialidade</option>
                  <option value="cardiologia">Cardiologia</option>
                  <option value="clinica-geral">Clínica Geral</option>
                  <option value="dermatologia">Dermatologia</option>
                  <option value="neurologia">Neurologia</option>
                  <option value="ortopedia">Ortopedia</option>
                  <option value="pediatria">Pediatria</option>
                </select>
              </div>
              
              <button className="w-full btn btn-primary">
                Solicitar Agendamento
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Entraremos em contato para confirmar sua consulta.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;