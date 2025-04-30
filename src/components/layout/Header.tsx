import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre-nos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  const activeClass = "text-primary-500 font-medium";
  const inactiveClass = (scrolled || menuOpen) 
    ? "text-neutral-700 hover:text-primary-500 transition-colors"
    : "text-white hover:text-secondary-500 transition-colors";

  return (
    <header 
      className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-white shadow-md py-3' 
          : menuOpen 
            ? 'bg-white py-3'
            : 'bg-transparent py-5'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 z-50" 
            onClick={closeMenu}
          >
            <Sun className={`h-8 w-8 ${(scrolled || menuOpen) ? 'text-secondary-500' : 'text-secondary-500'}`} />
            <span className="text-2xl font-montserrat font-bold">
              <span className={`${(scrolled || menuOpen) ? 'text-primary-500' : 'text-white'}`}>
                Solar
              </span>
              <span className="text-secondary-500">Brasil</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => 
                  isActive ? activeClass : inactiveClass
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="tel:+551199999999" 
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-colors
                ${scrolled 
                  ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                }
              `}
            >
              <Phone size={18} />
              <span>(11) 9999-9999</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`
              lg:hidden p-2 rounded-full z-50 transition-colors
              ${menuOpen 
                ? 'text-neutral-700' 
                : scrolled 
                  ? 'text-neutral-700' 
                  : 'text-white'
              }
            `}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col pt-20 pb-8 h-screen">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path} 
                  to={item.path}
                  className={({ isActive }) => `
                    text-xl py-4 border-b border-neutral-100
                    ${isActive ? activeClass : 'text-neutral-700 hover:text-primary-500'}
                  `}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              ))}
              
              <div className="mt-8">
                <p className="text-neutral-500 mb-4">Entre em contato:</p>
                <a 
                  href="tel:+551199999999" 
                  className="flex items-center justify-center gap-2 bg-primary-500 text-white w-full py-4 rounded-full hover:bg-primary-600 transition-colors"
                  onClick={closeMenu}
                >
                  <Phone size={20} />
                  <span className="font-medium">(11) 9999-9999</span>
                </a>
                
                <div className="mt-6 text-center">
                  <p className="text-neutral-500">Horário de atendimento:</p>
                  <p className="text-neutral-700">Segunda a Sexta: 08h às 18h</p>
                  <p className="text-neutral-700">Sábado: 09h às 13h</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;