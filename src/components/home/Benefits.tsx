import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';
import { Sun, DollarSign, Leaf, Trophy, Clock, Home } from 'lucide-react';

const Benefits = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px'
  });

  const benefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-primary-500" />,
      title: "Economia Financeira",
      description: "Reduza sua conta de luz em até 95% e obtenha retorno sobre investimento em 3 a 5 anos."
    },
    {
      icon: <Leaf className="h-12 w-12 text-accent-500" />,
      title: "Energia Renovável",
      description: "Contribua para a sustentabilidade do planeta com energia limpa e renovável."
    },
    {
      icon: <Trophy className="h-12 w-12 text-secondary-500" />,
      title: "Valorização Imobiliária",
      description: "Aumente o valor do seu imóvel com um sistema moderno de geração de energia."
    },
    {
      icon: <Clock className="h-12 w-12 text-primary-500" />,
      title: "Longa Durabilidade",
      description: "Painéis solares com garantia de 25 anos e vida útil superior a 30 anos."
    },
    {
      icon: <Home className="h-12 w-12 text-accent-500" />,
      title: "Independência Energética",
      description: "Produza sua própria energia e proteja-se contra aumentos na tarifa elétrica."
    },
    {
      icon: <Sun className="h-12 w-12 text-secondary-500" />,
      title: "Manutenção Mínima",
      description: "Sistemas de baixa manutenção e alta confiabilidade com monitoramento remoto."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Por que escolher energia solar?"
          subtitle="Conheça os principais benefícios que a energia solar pode trazer para você e para o meio ambiente"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-700 ease-out
                ${isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">{benefit.title}</h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;