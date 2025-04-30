import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ChevronRight, MapPin, Zap, Sun, DollarSign } from 'lucide-react';

const Projetos = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [filter, setFilter] = useState<string>('todos');

  const projects = [
    {
      id: 1,
      title: 'Residência em São Paulo',
      category: 'residencial',
      location: 'São Paulo, SP',
      power: '5.2 kWp',
      panels: '13 painéis de 400W',
      savings: 'R$ 450/mês',
      co2: '3.5 toneladas/ano',
      description: 'Instalação residencial com sistema de monitoramento remoto em telhado cerâmico. O cliente reduziu sua conta de luz em 95% desde a instalação.',
      image: 'https://images.pexels.com/photos/2989995/pexels-photo-2989995.jpeg'
    },
    {
      id: 2,
      title: 'Empresa de Tecnologia',
      category: 'comercial',
      location: 'Campinas, SP',
      power: '25 kWp',
      panels: '62 painéis de 400W',
      savings: 'R$ 2.200/mês',
      co2: '15 toneladas/ano',
      description: 'Projeto de média potência para empresa de tecnologia com alto consumo diurno. A instalação foi feita no telhado metálico do edifício comercial.',
      image: 'https://images.pexels.com/photos/159160/promotion-business-finance-idea-159160.jpeg'
    },
    {
      id: 3,
      title: 'Indústria Metalúrgica',
      category: 'industrial',
      location: 'Joinville, SC',
      power: '120 kWp',
      panels: '300 painéis de 400W',
      savings: 'R$ 10.500/mês',
      co2: '72 toneladas/ano',
      description: 'Sistema de grande porte para indústria com alto consumo energético. Além da redução significativa na conta de energia, houve melhoria na classificação energética da empresa.',
      image: 'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg'
    },
    {
      id: 4,
      title: 'Fazenda Solar',
      category: 'rural',
      location: 'Ribeirão Preto, SP',
      power: '35 kWp',
      panels: '87 painéis de 400W',
      savings: 'R$ 3.200/mês',
      co2: '22 toneladas/ano',
      description: 'Sistema instalado em fazenda para suprir o consumo da sede, casa de máquinas e irrigação. O cliente conseguiu reduzir drasticamente seus custos operacionais.',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg'
    },
    {
      id: 5,
      title: 'Condomínio Residencial',
      category: 'residencial',
      location: 'Florianópolis, SC',
      power: '40 kWp',
      panels: '100 painéis de 400W',
      savings: 'R$ 3.600/mês',
      co2: '25 toneladas/ano',
      description: 'Sistema de geração compartilhada para condomínio residencial. A energia gerada abastece as áreas comuns e é distribuída entre os moradores participantes.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
    },
    {
      id: 6,
      title: 'Rede de Supermercados',
      category: 'comercial',
      location: 'Belo Horizonte, MG',
      power: '75 kWp',
      panels: '187 painéis de 400W',
      savings: 'R$ 6.800/mês',
      co2: '45 toneladas/ano',
      description: 'Projeto para filial de rede de supermercados com alto consumo de refrigeração. A instalação foi feita no estacionamento, criando um espaço coberto para os clientes.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg'
    },
    {
      id: 7,
      title: 'Escola Municipal',
      category: 'publico',
      location: 'Recife, PE',
      power: '30 kWp',
      panels: '75 painéis de 400W',
      savings: 'R$ 2.700/mês',
      co2: '18 toneladas/ano',
      description: 'Projeto para escola municipal que, além da economia, serve como ferramenta educacional para os alunos sobre sustentabilidade e energia renovável.',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg'
    },
    {
      id: 8,
      title: 'Clínica Médica',
      category: 'comercial',
      location: 'Porto Alegre, RS',
      power: '18 kWp',
      panels: '45 painéis de 400W',
      savings: 'R$ 1.600/mês',
      co2: '11 toneladas/ano',
      description: 'Sistema instalado em clínica médica com alto consumo de equipamentos. O projeto incluiu sistema de backup para áreas críticas.',
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg'
    },
    {
      id: 9,
      title: 'Usina de Mini Geração',
      category: 'industrial',
      location: 'Goiânia, GO',
      power: '500 kWp',
      panels: '1250 painéis de 400W',
      savings: 'R$ 45.000/mês',
      co2: '310 toneladas/ano',
      description: 'Usina de mini geração em terreno dedicado para atender grupo de empresas através de autoconsumo remoto. Um dos maiores projetos da região.',
      image: 'https://images.pexels.com/photos/9875362/pexels-photo-9875362.jpeg'
    }
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              Nossos Projetos
            </h1>
            <p className="text-xl text-neutral-200 mb-4">
              Conheça alguns dos nossos casos de sucesso em diferentes segmentos
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Galeria de Projetos"
            subtitle="Explore nossa coleção de instalações solares em diferentes contextos"
            centered
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'residencial', label: 'Residencial' },
              { id: 'comercial', label: 'Comercial' },
              { id: 'industrial', label: 'Industrial' },
              { id: 'rural', label: 'Rural' },
              { id: 'publico', label: 'Público' }
            ].map((category) => (
              <button
                key={category.id}
                className={`
                  px-5 py-2 m-2 rounded-full text-sm md:text-base font-medium transition-all
                  ${filter === category.id 
                    ? 'bg-primary-500 text-white shadow-md' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}
                `}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`
                  overflow-hidden transition-all duration-700
                  ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
                animate
              >
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {project.category === 'residencial' && 'Residencial'}
                      {project.category === 'comercial' && 'Comercial'}
                      {project.category === 'industrial' && 'Industrial'}
                      {project.category === 'rural' && 'Rural'}
                      {project.category === 'publico' && 'Público'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-3">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-neutral-500 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-neutral-600 mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-neutral-50 p-3 rounded-lg">
                      <div className="flex items-center text-primary-500 mb-1">
                        <Sun size={16} className="mr-2" />
                        <span className="text-sm">Potência</span>
                      </div>
                      <p className="font-semibold">{project.power}</p>
                    </div>
                    <div className="bg-neutral-50 p-3 rounded-lg">
                      <div className="flex items-center text-secondary-500 mb-1">
                        <DollarSign size={16} className="mr-2" />
                        <span className="text-sm">Economia</span>
                      </div>
                      <p className="font-semibold">{project.savings}</p>
                    </div>
                  </div>

                  <button className="flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors">
                    Ver detalhes <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Projetos Realizados", value: "5,000+" },
              { label: "Potência Instalada", value: "30 MW" },
              { label: "CO₂ Evitado por Ano", value: "18.000 ton" },
              { label: "Economia Gerada", value: "R$ 36M/ano" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-montserrat font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-neutral-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Projeto em Destaque"
            subtitle="Conheça em detalhes um dos nossos projetos mais significativos"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/9875362/pexels-photo-9875362.jpeg" 
                  alt="Usina de Mini Geração" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
            
            <div>
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Industrial
              </span>
              <h3 className="text-3xl font-montserrat font-bold mb-4">
                Usina de Mini Geração
              </h3>
              <p className="text-neutral-600 mb-6">
                Um dos maiores projetos desenvolvidos pela SolarBrasil, esta usina de 500 kWp foi instalada em um terreno de 1 hectare em Goiânia para atender um grupo de empresas através do modelo de autoconsumo remoto.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-neutral-500 text-sm mb-1">Localização</p>
                  <p className="font-semibold">Goiânia, GO</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-neutral-500 text-sm mb-1">Potência</p>
                  <p className="font-semibold">500 kWp</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-neutral-500 text-sm mb-1">Economia</p>
                  <p className="font-semibold">R$ 45.000/mês</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-neutral-500 text-sm mb-1">CO₂ Evitado</p>
                  <p className="font-semibold">310 toneladas/ano</p>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold mb-3">Desafios do Projeto</h4>
              <p className="text-neutral-600 mb-6">
                O principal desafio foi a integração com a rede elétrica local e a obtenção das licenças ambientais necessárias. Nossa equipe trabalhou em estreita colaboração com órgãos reguladores para garantir a conformidade com todas as normas.
              </p>
              
              <h4 className="text-xl font-semibold mb-3">Resultados</h4>
              <p className="text-neutral-600">
                A usina foi concluída em tempo recorde de 60 dias e tem superado as expectativas de geração desde a ativação. As empresas beneficiadas estão economizando cerca de 85% em suas contas de energia, com payback estimado em 4 anos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;