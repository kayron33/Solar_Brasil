import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { 
  Home, Building, Factory, Wrench, Calculator, Check, ArrowRight, 
  Sun, Shield, Clock, Activity, Zap, ThumbsUp
} from 'lucide-react';

const Servicos = () => {
  const [featuresRef, featuresInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [processRef, processInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      id: 'residencial',
      title: 'Residencial',
      icon: <Home className="h-12 w-12 text-primary-500" />,
      description: 'Soluções de energia solar para residências, condomínios e casas de veraneio.',
      features: [
        'Projetos personalizados para cada tipo de residência',
        'Sistemas on-grid e off-grid disponíveis',
        'Monitoramento remoto via aplicativo',
        'Financiamento em até 120 meses',
        'Economia de até 95% na conta de luz'
      ],
      benefits: [
        'Valorização do imóvel',
        'Independência energética',
        'Economia mensal garantida',
        'Energia limpa e renovável',
        'Manutenção simples e econômica'
      ],
      image: 'https://images.pexels.com/photos/2989995/pexels-photo-2989995.jpeg'
    },
    {
      id: 'comercial',
      title: 'Comercial',
      icon: <Building className="h-12 w-12 text-primary-500" />,
      description: 'Soluções para comércios, escritórios, escolas, hospitais e outros estabelecimentos.',
      features: [
        'Análise detalhada do perfil de consumo',
        'Projetos para redução de demanda contratada',
        'Sistemas inteligentes de gestão de energia',
        'Financiamento com carência de até 6 meses',
        'Redução de custos operacionais'
      ],
      benefits: [
        'Economia significativa nos custos',
        'Marketing verde para sua empresa',
        'Proteção contra aumento de tarifas',
        'Redução da pegada de carbono',
        'Melhoria na classificação energética'
      ],
      image: 'https://images.pexels.com/photos/159160/promotion-business-finance-idea-159160.jpeg'
    },
    {
      id: 'industrial',
      title: 'Industrial',
      icon: <Factory className="h-12 w-12 text-primary-500" />,
      description: 'Projetos de grande porte para indústrias de todos os segmentos.',
      features: [
        'Projetos de alta potência (acima de 75 kWp)',
        'Estudos de viabilidade técnico-financeira',
        'Análise e otimização de demanda contratada',
        'Instalação sem interrupção da produção',
        'Integração com outros sistemas energéticos'
      ],
      benefits: [
        'Redução significativa nos custos de energia',
        'Maior competitividade no mercado',
        'Redução da dependência energética',
        'Cumprimento de metas de sustentabilidade',
        'Valorização da marca no mercado'
      ],
      image: 'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg'
    },
    {
      id: 'manutencao',
      title: 'Manutenção',
      icon: <Wrench className="h-12 w-12 text-primary-500" />,
      description: 'Serviços de manutenção preventiva e corretiva para sistemas fotovoltaicos.',
      features: [
        'Limpeza especializada de painéis solares',
        'Inspeção termográfica para detecção de falhas',
        'Manutenção de inversores e conexões',
        'Análise de performance e eficiência',
        'Correção de problemas técnicos'
      ],
      benefits: [
        'Prolongamento da vida útil do sistema',
        'Maximização da produção energética',
        'Prevenção de problemas técnicos',
        'Garantia de melhor desempenho',
        'Tranquilidade e segurança'
      ],
      image: 'https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg'
    },
    {
      id: 'consultoria',
      title: 'Consultoria',
      icon: <Calculator className="h-12 w-12 text-primary-500" />,
      description: 'Consultoria energética especializada para otimização de consumo e custos.',
      features: [
        'Análise detalhada de contas de energia',
        'Estudos de viabilidade para sistemas fotovoltaicos',
        'Dimensionamento adequado à necessidade',
        'Análise de ROI e payback',
        'Consultoria para financiamento'
      ],
      benefits: [
        'Investimento adequado às necessidades',
        'Maximização do retorno financeiro',
        'Tomada de decisão baseada em dados',
        'Orientação técnica especializada',
        'Planejamento energético de longo prazo'
      ],
      image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg'
    }
  ];

  const process = [
    {
      icon: <Calculator size={32} className="text-primary-500" />,
      title: "Análise e Orçamento",
      description: "Avaliamos seu consumo, local de instalação e necessidades específicas para criar um projeto personalizado."
    },
    {
      icon: <Sun size={32} className="text-primary-500" />,
      title: "Projeto Detalhado",
      description: "Desenvolvemos um projeto técnico completo, dimensionando o sistema ideal para sua necessidade."
    },
    {
      icon: <ThumbsUp size={32} className="text-primary-500" />,
      title: "Aprovação",
      description: "Após sua aprovação, cuidamos de toda a documentação necessária junto à concessionária de energia."
    },
    {
      icon: <Zap size={32} className="text-primary-500" />,
      title: "Instalação",
      description: "Nossa equipe qualificada realiza a instalação completa do sistema, seguindo as normas técnicas."
    },
    {
      icon: <Activity size={32} className="text-primary-500" />,
      title: "Ativação",
      description: "Realizamos todos os testes necessários e ativamos seu sistema para começar a gerar energia."
    },
    {
      icon: <Shield size={32} className="text-primary-500" />,
      title: "Monitoramento",
      description: "Oferecemos monitoramento contínuo do desempenho do seu sistema e suporte técnico especializado."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-500 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-neutral-200 mb-4">
              Soluções completas em energia solar para residências, comércios e indústrias
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Soluções Personalizadas"
            subtitle="Oferecemos uma gama completa de serviços adaptados às suas necessidades"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="p-0 transition-all duration-500"
                animate
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-montserrat font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <p className="text-neutral-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`#${service.id}`} 
                    className="flex items-center text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Saiba mais <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features and Benefits Section */}
      <section ref={featuresRef} className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="mb-20 last:mb-0 scroll-mt-24"
            >
              <SectionTitle
                title={`Energia Solar ${service.title}`}
                subtitle={service.description}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
                <div 
                  className={`
                    order-2 lg:order-1
                    transition-all duration-1000 
                    ${featuresInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                  `}
                >
                  <h3 className="text-2xl font-montserrat font-semibold mb-6">
                    Características Principais
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                        <Check className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-montserrat font-semibold mb-6">
                    Benefícios
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                        <ThumbsUp className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="primary" 
                    to="/contato" 
                    className="mt-6"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>

                <div 
                  className={`
                    order-1 lg:order-2 relative
                    transition-all duration-1000 
                    ${featuresInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                  `}
                >
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      {service.icon}
                      <span className="text-xl font-bold text-primary-500">{service.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nosso Processo"
            subtitle="Conheça o passo a passo desde o orçamento até a instalação do seu sistema solar"
            centered
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {process.map((step, index) => (
              <div 
                key={index}
                className={`
                  bg-primary-600 rounded-lg p-6 relative overflow-hidden
                  transition-all duration-700
                  ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="text-[120px] font-bold">{index + 1}</span>
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-200 relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="secondary" 
              size="lg"
              to="/contato"
            >
              Comece Agora
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre energia solar fotovoltaica"
            centered
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                question: "Quanto tempo dura um sistema de energia solar?",
                answer: "Os painéis solares têm garantia de 25 anos e vida útil de 30 anos ou mais. Os inversores geralmente têm garantia de 5 a 10 anos, podendo durar até 15 anos com a manutenção adequada."
              },
              {
                question: "Quanto vou economizar com energia solar?",
                answer: "A economia depende do seu consumo atual e da tarifa local de energia, mas normalmente varia de 75% a 95% da conta de luz. O sistema é dimensionado para suprir a maior parte do seu consumo, garantindo um excelente retorno sobre o investimento."
              },
              {
                question: "Quais são as formas de pagamento disponíveis?",
                answer: "Oferecemos diversas opções, desde pagamento à vista com desconto até financiamento em até 120 meses com parcelas que podem ser menores que sua atual conta de luz, garantindo economia desde o primeiro mês."
              },
              {
                question: "Quanto tempo leva para instalar um sistema solar?",
                answer: "O tempo de instalação varia conforme o tamanho do projeto, mas geralmente leva de 1 a 5 dias. O processo completo, incluindo aprovação da concessionária, pode levar de 30 a 60 dias, dependendo da região."
              },
              {
                question: "Os painéis solares funcionam em dias nublados ou chuvosos?",
                answer: "Sim, embora com menor eficiência. Os sistemas são dimensionados considerando as variações climáticas da sua região, garantindo que a média anual de geração atenda às suas necessidades energéticas."
              },
              {
                question: "Preciso de manutenção constante nos painéis solares?",
                answer: "A manutenção é mínima. Recomendamos uma limpeza a cada 6-12 meses (dependendo da região) e inspeções preventivas anuais para garantir o máximo desempenho do sistema."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-montserrat font-semibold mb-3">
                  {faq.question}
                </h4>
                <p className="text-neutral-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;