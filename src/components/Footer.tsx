import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-6">
              Clínica<span className="text-secondary-400">Saúde</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Cuidamos da sua saúde com excelência, tecnologia e atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-primary-600"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-primary-600"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-primary-600"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Telefone</p>
                  <a href="tel:+551199999999" className="text-white hover:text-primary-400">
                    (11) 9999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:contato@clinicasaude.com.br" className="text-white hover:text-primary-400">
                    contato@clinicasaude.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Endereço</p>
                  <address className="text-white not-italic">
                    Av. Paulista, 1000<br />
                    São Paulo, SP, 01310-100
                  </address>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">
              Horário de Atendimento
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Segunda à Sexta</p>
                  <p className="text-gray-300">08:00 - 20:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Sábado</p>
                  <p className="text-gray-300">08:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Domingo</p>
                  <p className="text-gray-300">Fechado</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Blog de Saúde
                </Link>
              </li>
              <li>
                <Link to="/agendamento" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Agendar Consulta
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Clínica Saúde Premium. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-primary-400">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-primary-400">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;