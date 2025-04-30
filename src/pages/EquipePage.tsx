import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import CTASection from '../components/CTASection';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const EquipePage: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Roberto Campos',
      role: 'Cardiologista',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
      description: 'Especialista em doenças cardiovasculares, com mais de 15 anos de experiência e formação pela USP.',
    },
    {
      name: 'Dra. Camila Santos',
      role: 'Neurologista',
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg',
      description: 'Pós-graduada em neurologia clínica, com foco em tratamentos inovadores e medicina preventiva.',
    },
    {
      name: 'Dr. Marcos Oliveira',
      role: 'Clínico Geral',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
      description: 'Especialista em medicina interna com abordagem integral e humanizada para o cuidado dos pacientes.',
    },
    {
      name: 'Dra. Fernanda Lima',
      role: 'Pediatra',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg',
      description: 'Dedicada ao cuidado da saúde infantil com atenção especial ao desenvolvimento e bem-estar das crianças.',
    },
    {
      name: 'Dr. Alexandre Costa',
      role: 'Ortopedista',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg',
      description: 'Especializado em cirurgias ortopédicas e tratamentos conservadores para lesões musculoesqueléticas.',
    },
    {
      name: 'Dra. Juliana Ferreira',
      role: 'Dermatologista',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
      description: 'Formação em dermatologia clínica e estética, com foco em tratamentos inovadores e minimamente invasivos.',
    },
    {
      name: 'Dr. Henrique Silva',
      role: 'Oftalmologista',
      image: 'https://images.pexels.com/photos/5407212/pexels-photo-5407212.jpeg',
      description: 'Referência em cirurgias oculares e tratamento de doenças da visão, com mais de 10 anos de experiência.',
    },
    {
      name: 'Dra. Carolina Mendes',
      role: 'Endocrinologista',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
      description: 'Especialista em distúrbios hormonais e metabólicos, com abordagem integrativa para saúde e qualidade de vida.',
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={pageVariants}
    >
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="text-primary-600">Equipe</span> Médica
            </h1>
            <p className="text-gray-600 text-lg">
              Contamos com uma equipe de profissionais altamente qualificados e 
              comprometidos com a saúde e bem-estar dos nossos pacientes. Conheça 
              alguns dos nossos especialistas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <TeamCard 
                key={index}
                name={doctor.name}
                role={doctor.role}
                image={doctor.image}
                description={doctor.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-50 p-8 md:p-12 rounded-2xl shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Formação Contínua e Atualização
                </h2>
                <p className="text-gray-700 mb-6">
                  Na Clínica Saúde Premium, valorizamos o conhecimento e a constante 
                  atualização dos nossos profissionais. Por isso, investimos continuamente 
                  na capacitação da nossa equipe.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Congressos e Conferências:</strong> Participação regular 
                      em eventos nacionais e internacionais.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Cursos de Especialização:</strong> Incentivo para 
                      aprimoramento constante das técnicas e conhecimentos.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Reuniões Clínicas:</strong> Discussão interdisciplinar 
                      de casos para melhor abordagem terapêutica.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Parcerias Acadêmicas:</strong> Colaboração com universidades 
                      e centros de pesquisa para inovação constante.
                    </p>
                  </li>
                </ul>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg" 
                    alt="Equipe médica em treinamento" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <CTASection />
    </motion.div>
  );
};

export default EquipePage;