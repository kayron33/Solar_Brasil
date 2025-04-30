import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogCard: React.FC<{ post: BlogPost; delay?: number }> = ({ post, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl overflow-hidden shadow-card group hover:shadow-card-hover transition-all duration-300"
    >
      <div className="relative overflow-hidden h-52">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="text-primary-600 font-medium inline-flex items-center group-hover:text-primary-700">
          Ler mais <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const BlogPage: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Prevenção e Cuidados Essenciais com a Saúde do Coração',
      excerpt: 'Descubra como pequenas mudanças nos hábitos diários podem proteger seu coração e prevenir doenças cardiovasculares.',
      date: '10 Jun 2025',
      author: 'Dr. Roberto Campos',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      category: 'Cardiologia',
    },
    {
      id: 2,
      title: 'Alergias Sazonais: Como Identificar e Tratar os Sintomas',
      excerpt: 'Aprenda a reconhecer os sintomas das alergias sazonais e descubra tratamentos eficazes para melhorar sua qualidade de vida.',
      date: '05 Jun 2025',
      author: 'Dra. Carolina Mendes',
      image: 'https://images.pexels.com/photos/4047140/pexels-photo-4047140.jpeg',
      category: 'Alergologia',
    },
    {
      id: 3,
      title: 'Alimentação Saudável para Crianças: Dicas e Orientações',
      excerpt: 'Dicas práticas para introduzir hábitos alimentares saudáveis na rotina das crianças e garantir seu desenvolvimento adequado.',
      date: '28 Mai 2025',
      author: 'Dra. Fernanda Lima',
      image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg',
      category: 'Pediatria',
    },
    {
      id: 4,
      title: 'O Impacto do Estresse na Saúde Mental e Física',
      excerpt: 'Entenda como o estresse afeta o organismo e conheça estratégias eficazes para gerenciá-lo e melhorar sua saúde geral.',
      date: '20 Mai 2025',
      author: 'Dr. Marcos Oliveira',
      image: 'https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg',
      category: 'Saúde Mental',
    },
    {
      id: 5,
      title: 'Cuidados com a Pele: Rotina Diária para Pele Saudável',
      excerpt: 'Aprenda a criar uma rotina de cuidados com a pele eficaz e adaptada às necessidades específicas do seu tipo de pele.',
      date: '15 Mai 2025',
      author: 'Dra. Juliana Ferreira',
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg',
      category: 'Dermatologia',
    },
    {
      id: 6,
      title: 'Exercícios para Aliviar Dores nas Costas e Melhorar a Postura',
      excerpt: 'Conheça exercícios simples que podem ser feitos em casa para aliviar dores nas costas e corrigir problemas posturais.',
      date: '08 Mai 2025',
      author: 'Dr. Alexandre Costa',
      image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg',
      category: 'Ortopedia',
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
              Blog de <span className="text-primary-600">Saúde</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Fique por dentro das últimas novidades, dicas e informações sobre 
              saúde e bem-estar com conteúdos produzidos por nossos especialistas.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <button className="bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-medium">
              Todos
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              Cardiologia
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              Nutrição
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              Pediatria
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              Saúde Mental
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              Dermatologia
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard 
                key={post.id}
                post={post}
                delay={index * 0.05}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="btn btn-outline">
              Carregar mais artigos
            </button>
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
            className="bg-primary-50 p-8 md:p-12 rounded-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Assine Nossa Newsletter
                </h2>
                <p className="text-gray-700 mb-6">
                  Receba em seu email conteúdos exclusivos sobre saúde, dicas 
                  de prevenção e notícias sobre os mais recentes avanços da medicina.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-1 mr-2"
                    />
                    <p className="text-gray-600 text-sm">
                      Concordo em receber comunicações via e-mail e estou ciente da política de privacidade.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Assinar Newsletter
                  </button>
                </form>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block"
              >
                <img 
                  src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg" 
                  alt="Médica escrevendo em um tablet" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;