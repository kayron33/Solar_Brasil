import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white z-0"></div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-lg text-primary-600 font-medium mb-3">Bem-vindo à Clínica Saúde Premium</h5>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">
            Cuidados médicos de <span className="text-primary-600">excelência</span> para você
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Oferecemos atendimento humanizado com profissionais altamente qualificados
            e tecnologia de ponta para cuidar da sua saúde.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/agendamento" className="btn btn-primary">
              <Calendar className="mr-2 h-5 w-5" />
              Agende sua Consulta
            </Link>
            <Link to="/servicos" className="btn btn-outline">
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-secondary-500 mr-2" />
              <span className="text-gray-700">Equipe especializada</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-secondary-500 mr-2" />
              <span className="text-gray-700">Atendimento humanizado</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-secondary-500 mr-2" />
              <span className="text-gray-700">Tecnologia avançada</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" 
              alt="Equipe médica profissional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
          </div>
          
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <p className="text-sm font-medium text-green-600">Atendimento disponível</p>
            </div>
            <p className="text-gray-700 text-sm">
              Estamos prontos para atendê-lo com toda atenção e cuidado que você merece.
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute -top-6 -right-6 bg-primary-600 p-6 rounded-xl shadow-lg max-w-xs text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h4 className="font-semibold mb-2">Excelência médica</h4>
            <p className="text-primary-100 text-sm">
              Atendimento de alto padrão com profissionais renomados e equipamentos modernos.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;