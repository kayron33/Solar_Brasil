import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { ChevronDown, Sun, Zap, Gauge } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Energia limpa para um futuro melhor",
      subtitle: "Reduza sua conta de luz em até 95% com energia solar fotovoltaica",
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg",
    },
    {
      title: "Sustentabilidade que cabe no seu bolso",
      subtitle: "Investimento com retorno garantido e economia desde o primeiro mês",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    },
    {
      title: "Soluções completas em energia solar",
      subtitle: "Do projeto à instalação, cuidamos de tudo para você",
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 mt-12 md:mt-0">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                currentSlide === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}
              style={{ display: currentSlide === index ? 'block' : 'none' }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 mb-8">
                {slide.subtitle}
              </p>
            </div>
          ))}

          <div className="flex flex-wrap gap-4 mt-8">
            <Button 
              variant="primary" 
              size="lg" 
              to="/contato"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              to="/servicos"
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white max-w-4xl">
            <div className="flex flex-col items-center text-center bg-black bg-opacity-30 rounded-lg p-4">
              <Sun size={40} className="text-secondary-500 mb-3" />
              <h3 className="text-3xl font-bold">+5,000</h3>
              <p className="text-neutral-200">Instalações realizadas</p>
            </div>
            <div className="flex flex-col items-center text-center bg-black bg-opacity-30 rounded-lg p-4">
              <Zap size={40} className="text-secondary-500 mb-3" />
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-neutral-200">Economia na conta de luz</p>
            </div>
            <div className="flex flex-col items-center text-center bg-black bg-opacity-30 rounded-lg p-4">
              <Gauge size={40} className="text-secondary-500 mb-3" />
              <h3 className="text-3xl font-bold">25 anos</h3>
              <p className="text-neutral-200">Garantia nos painéis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        onClick={scrollToNextSection}
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;