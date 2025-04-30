import { Link } from 'react-router-dom';
import { Sun, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-100 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sun className="h-8 w-8 text-secondary-500" />
              <span className="text-2xl font-montserrat font-bold">
                <span className="text-primary-500">Solar</span>
                <span className="text-secondary-500">Brasil</span>
              </span>
            </div>
            <p className="text-neutral-300 mb-6">
              Oferecemos soluções completas em energia solar fotovoltaica, ajudando famílias e empresas a economizarem na conta de luz e contribuírem para um planeta mais sustentável.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-700 p-2 rounded-full hover:bg-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-700 p-2 rounded-full hover:bg-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-700 p-2 rounded-full hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', path: '/' },
                { name: 'Sobre Nós', path: '/sobre-nos' },
                { name: 'Serviços', path: '/servicos' },
                { name: 'Projetos', path: '/projetos' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contato', path: '/contato' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-neutral-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {[
                { name: 'Instalação Residencial', path: '/servicos#residencial' },
                { name: 'Instalação Comercial', path: '/servicos#comercial' },
                { name: 'Instalação Industrial', path: '/servicos#industrial' },
                { name: 'Manutenção de Sistemas', path: '/servicos#manutencao' },
                { name: 'Consultoria Energética', path: '/servicos#consultoria' },
                { name: 'Projetos Personalizados', path: '/servicos#projetos' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-neutral-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary-400" />
                <span className="text-neutral-300">
                  Av. Paulista, 1000<br />
                  São Paulo - SP, 01310-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary-400" />
                <a href="tel:+551199999999" className="text-neutral-300 hover:text-white transition-colors">
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary-400" />
                <a href="mailto:contato@solarbrasil.com.br" className="text-neutral-300 hover:text-white transition-colors">
                  contato@solarbrasil.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-6 text-center text-neutral-400">
          <p>&copy; {currentYear} SolarBrasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;