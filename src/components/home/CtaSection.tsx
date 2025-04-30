import Button from '../ui/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Sun, ChevronRight } from 'lucide-react';

const CtaSection = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-neutral-900 text-white relative overflow-hidden"
    >
      {/* Animated sun rays background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] animate-pulse-slow">
            <Sun size={600} className="text-secondary-500" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`
            max-w-3xl mx-auto text-center
            transition-all duration-1000 
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >
          <div className="mb-8">
            <div className="inline-block p-2 rounded-full bg-primary-500/20 mb-6">
              <Sun size={40} className="text-secondary-500" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Pronto para começar a economizar com energia solar?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Dê o primeiro passo para a independência energética e uma economia significativa na conta de luz.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              to="/contato"
            >
              Solicitar Orçamento
              <ChevronRight className="ml-2" size={18} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              href="tel:+551199999999"
            >
              Fale com um Consultor
            </Button>
          </div>
          
          <p className="mt-8 text-neutral-400">
            Ou ligue para nós: <a href="tel:+551199999999" className="text-white font-semibold hover:text-secondary-500 transition-colors">(11) 9999-9999</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;