import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: 'Residência em São Paulo',
      category: 'Residencial',
      location: 'São Paulo, SP',
      power: '5.2 kWp',
      panels: '13 painéis de 400W',
      savings: 'R$ 450/mês',
      image: 'https://images.pexels.com/photos/2989995/pexels-photo-2989995.jpeg'
    },
    {
      id: 2,
      title: 'Empresa de Tecnologia',
      category: 'Comercial',
      location: 'Campinas, SP',
      power: '25 kWp',
      panels: '62 painéis de 400W',
      savings: 'R$ 2.200/mês',
      image: 'https://images.pexels.com/photos/159160/promotion-business-finance-idea-159160.jpeg'
    },
    {
      id: 3,
      title: 'Indústria Metalúrgica',
      category: 'Industrial',
      location: 'Joinville, SC',
      power: '120 kWp',
      panels: '300 painéis de 400W',
      savings: 'R$ 10.500/mês',
      image: 'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg'
    },
    {
      id: 4,
      title: 'Fazenda Solar',
      category: 'Rural',
      location: 'Ribeirão Preto, SP',
      power: '35 kWp',
      panels: '87 painéis de 400W',
      savings: 'R$ 3.200/mês',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-primary-500 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Nossos Projetos"
          subtitle="Conheça alguns dos nossos casos de sucesso com clientes satisfeitos"
          centered
          light
        />

        <div className={`
          transition-all duration-1000 
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
        `}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={projects[activeIndex].image} 
                  alt={projects[activeIndex].title} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <span className="bg-secondary-500 text-neutral-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                    {projects[activeIndex].category}
                  </span>
                  <h3 className="text-2xl font-montserrat font-bold mb-2">
                    {projects[activeIndex].title}
                  </h3>
                  <p className="text-neutral-200">
                    {projects[activeIndex].location}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-montserrat font-bold mb-6">
                {projects[activeIndex].title}
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-primary-600 rounded-lg p-4">
                  <span className="text-primary-200 block mb-1">Potência instalada</span>
                  <span className="text-xl font-semibold">{projects[activeIndex].power}</span>
                </div>
                
                <div className="bg-primary-600 rounded-lg p-4">
                  <span className="text-primary-200 block mb-1">Sistema</span>
                  <span className="text-xl font-semibold">{projects[activeIndex].panels}</span>
                </div>
                
                <div className="bg-primary-600 rounded-lg p-4">
                  <span className="text-primary-200 block mb-1">Economia mensal</span>
                  <span className="text-xl font-semibold">{projects[activeIndex].savings}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Button 
                  variant="white" 
                  to="/projetos"
                >
                  Ver todos os projetos
                </Button>
                
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrev}
                    className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full"
                    aria-label="Projeto anterior"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full"
                    aria-label="Próximo projeto"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;