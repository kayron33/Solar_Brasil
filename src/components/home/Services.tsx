import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Button from '../ui/Button';
import { Home, Building, Factory, ArrowRight, Wrench, Calculator } from 'lucide-react';

const Services = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState<string>('residencial');

  const services = [
    {
      id: 'residencial',
      title: 'Residencial',
      icon: <Home className="h-6 w-6" />,
      description: 'Energia solar para sua casa com economia de até 95% na conta de luz.',
      features: [
        'Projeto personalizado para sua residência',
        'Sistemas de 3 a 15 kWp de potência',
        'Instalação rápida e sem quebra-quebra',
        'Financiamento em até 120 meses',
        'Monitoramento remoto via aplicativo',
        'Suporte técnico e manutenção preventiva'
      ],
      image: 'https://images.pexels.com/photos/2989995/pexels-photo-2989995.jpeg'
    },
    {
      id: 'comercial',
      title: 'Comercial',
      icon: <Building className="h-6 w-6" />,
      description: 'Soluções para pequenas e médias empresas reduzirem custos operacionais.',
      features: [
        'Projetos para comércios e escritórios',
        'Sistemas de 15 a 75 kWp',
        'Instalação com mínima interferência nas operações',
        'Financiamento com carência de até 6 meses',
        'Monitoramento e gestão de consumo',
        'Manutenção preventiva e corretiva'
      ],
      image: 'https://images.pexels.com/photos/159160/promotion-business-finance-idea-159160.jpeg'
    },
    {
      id: 'industrial',
      title: 'Industrial',
      icon: <Factory className="h-6 w-6" />,
      description: 'Projetos de grande porte para indústrias com alto consumo energético.',
      features: [
        'Soluções para indústrias de todos os segmentos',
        'Sistemas acima de 75 kWp',
        'Integração com sistemas existentes',
        'Análise detalhada de consumo e demanda',
        'Redução de demanda contratada',
        'Suporte técnico especializado 24/7'
      ],
      image: 'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg'
    },
    {
      id: 'manutencao',
      title: 'Manutenção',
      icon: <Wrench className="h-6 w-6" />,
      description: 'Serviços especializados de manutenção preventiva e corretiva.',
      features: [
        'Limpeza especializada de painéis solares',
        'Inspeção termográfica para detecção de falhas',
        'Manutenção de inversores e componentes',
        'Verificação de eficiência e performance',
        'Correção de problemas técnicos',
        'Relatórios detalhados de produção'
      ],
      image: 'https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg'
    },
    {
      id: 'consultoria',
      title: 'Consultoria',
      icon: <Calculator className="h-6 w-6" />,
      description: 'Consultoria energética para otimização de custos e eficiência.',
      features: [
        'Análise detalhada de contas de energia',
        'Estudo de viabilidade técnico-financeira',
        'Dimensionamento adequado do sistema',
        'Análise de retorno sobre investimento',
        'Consultoria para financiamento',
        'Suporte para obtenção de créditos de carbono'
      ],
      image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg'
    }
  ];

  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Oferecemos soluções completas em energia solar para todos os segmentos"
          centered
        />

        <div className="flex flex-wrap justify-center mb-10">
          {services.map((service) => (
            <button
              key={service.id}
              className={`
                flex items-center px-4 py-3 mx-2 my-2 rounded-full text-sm md:text-base font-medium transition-all
                ${activeTab === service.id 
                  ? 'bg-primary-500 text-white shadow-md' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}
              `}
              onClick={() => setActiveTab(service.id)}
            >
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        <div 
          className={`
            mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center 
            transition-opacity duration-500 
            ${isInView ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-montserrat font-semibold mb-4">
              {activeService.title}
            </h3>
            <p className="text-neutral-700 mb-6">
              {activeService.description}
            </p>
            <ul className="space-y-3 mb-8">
              {activeService.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              variant="primary" 
              to="/servicos" 
              className="mt-4"
            >
              Saiba mais
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-80 lg:h-96">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;