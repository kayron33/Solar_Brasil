import SectionTitle from '../components/ui/SectionTitle';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Sun, Award, Users, Leaf, Target, BarChart3 } from 'lucide-react';

const SobreNos = () => {
  const [historyRef, historyInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [valuesRef, valuesInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [teamRef, teamInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const teamMembers = [
    {
      name: "Alexandre Costa",
      position: "CEO / Fundador",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      description: "Com mais de 15 anos de experiência no setor de energia, Alexandre fundou a SolarBrasil com a missão de democratizar o acesso à energia solar no Brasil."
    },
    {
      name: "Mariana Santos",
      position: "Diretora de Operações",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      description: "Engenheira elétrica com especialização em sistemas fotovoltaicos, Mariana lidera a equipe técnica garantindo a excelência em cada projeto."
    },
    {
      name: "Ricardo Oliveira",
      position: "Diretor Comercial",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      description: "Com vasta experiência em vendas corporativas, Ricardo coordena a equipe comercial, sempre focado em entender as necessidades específicas de cada cliente."
    },
    {
      name: "Patrícia Lima",
      position: "Diretora Financeira",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      description: "Especialista em finanças com MBA em gestão de negócios, Patrícia é responsável por garantir a saúde financeira da empresa e as melhores condições para os clientes."
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
              Sobre a SolarBrasil
            </h1>
            <p className="text-xl text-neutral-200 mb-4">
              Referência nacional em energia solar fotovoltaica, atuando com excelência desde 2010
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section ref={historyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Nossa História"
                subtitle="Como nos tornamos líderes no mercado de energia solar"
              />

              <div className={`
                space-y-6 transition-all duration-1000 delay-300
                ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}>
                <p>
                  A SolarBrasil nasceu em 2010, quando o mercado de energia solar no Brasil ainda estava em seu início. Fundada pelo engenheiro Alexandre Costa, que vislumbrou o potencial da energia fotovoltaica em um país com uma das maiores taxas de irradiação solar do mundo.
                </p>
                <p>
                  Começamos como uma pequena empresa com apenas 5 funcionários, realizando instalações residenciais na região de São Paulo. Nossa dedicação à qualidade e atendimento personalizado rapidamente nos destacou no mercado.
                </p>
                <p>
                  Em 2015, expandimos nossas operações para atender clientes comerciais e industriais, abrindo escritórios em outras capitais do país. Em 2018, nos tornamos uma das maiores integradoras de sistemas fotovoltaicos do Brasil, com mais de 10.000 kWp instalados.
                </p>
                <p>
                  Hoje, contamos com mais de 200 colaboradores e escritórios em 10 estados brasileiros, mantendo o mesmo compromisso com a excelência técnica e a satisfação do cliente que nos guiou desde o início.
                </p>
              </div>
            </div>

            <div className={`
              relative h-[500px] transition-all duration-1000
              ${historyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
            `}>
              <img 
                src="https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg" 
                alt="Nossa História" 
                className="rounded-lg shadow-xl object-cover h-full w-full"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Sun className="h-8 w-8 text-secondary-500" />
                  <div>
                    <p className="text-neutral-500">Desde</p>
                    <p className="text-2xl font-bold text-primary-500">2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossos Valores"
            subtitle="Princípios que orientam cada aspecto do nosso trabalho"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Award className="h-12 w-12 text-primary-500" />,
                title: "Excelência",
                description: "Buscamos a excelência em cada etapa do processo, desde o primeiro contato até o pós-venda, garantindo a melhor experiência aos nossos clientes."
              },
              {
                icon: <Users className="h-12 w-12 text-primary-500" />,
                title: "Relacionamento",
                description: "Construímos relacionamentos duradouros com nossos clientes, baseados em confiança, transparência e compromisso com resultados."
              },
              {
                icon: <Leaf className="h-12 w-12 text-primary-500" />,
                title: "Sustentabilidade",
                description: "Promovemos o desenvolvimento sustentável através da disseminação da energia limpa e renovável, contribuindo para um futuro mais verde."
              },
              {
                icon: <Target className="h-12 w-12 text-primary-500" />,
                title: "Inovação",
                description: "Estamos sempre na vanguarda das tendências e tecnologias do setor, oferecendo as soluções mais avançadas aos nossos clientes."
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-primary-500" />,
                title: "Resultado",
                description: "Focamos em entregar resultados concretos e mensuráveis, garantindo o melhor retorno sobre o investimento para nossos clientes."
              },
              {
                icon: <Sun className="h-12 w-12 text-primary-500" />,
                title: "Transparência",
                description: "Atuamos com total transparência em todos os processos, desde o orçamento até a instalação e monitoramento do sistema."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`
                  bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all
                  ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '800ms' }}
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossa Equipe"
            subtitle="Conheça os profissionais por trás da SolarBrasil"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`
                  transition-all duration-1000
                  ${teamInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Instalações realizadas" },
              { number: "200+", label: "Colaboradores" },
              { number: "10", label: "Estados atendidos" },
              { number: "30 MW", label: "Capacidade instalada" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-montserrat font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-xl text-neutral-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;