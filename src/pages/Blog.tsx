import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const posts = [
    {
      id: 1,
      title: 'Como funciona um sistema de energia solar fotovoltaica?',
      excerpt: 'Entenda o funcionamento básico de um sistema solar fotovoltaico e como ele converte a luz do sol em eletricidade para sua casa ou empresa.',
      image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
      date: '15/05/2023',
      author: 'Marcelo Alves',
      category: 'educacional',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Quanto custa um sistema solar em 2025?',
      excerpt: 'Análise atualizada dos custos de instalação e manutenção de sistemas solares para residências, comércios e indústrias no mercado brasileiro.',
      image: 'https://images.pexels.com/photos/4595310/pexels-photo-4595310.jpeg',
      date: '03/02/2023',
      author: 'Carla Souza',
      category: 'financeiro',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Novas tecnologias em painéis solares',
      excerpt: 'Conheça as inovações mais recentes em tecnologia fotovoltaica que estão aumentando a eficiência e reduzindo custos de sistemas solares.',
      image: 'https://images.pexels.com/photos/2911697/pexels-photo-2911697.jpeg',
      date: '21/03/2023',
      author: 'Ricardo Teixeira',
      category: 'tecnologia',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Como dimensionar corretamente seu sistema solar',
      excerpt: 'Guia prático sobre como calcular adequadamente o tamanho do sistema fotovoltaico ideal para suas necessidades energéticas.',
      image: 'https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg',
      date: '10/04/2023',
      author: 'Fernanda Costa',
      category: 'educacional',
      readTime: '7 min'
    },
    {
      id: 5,
      title: 'Incentivos fiscais para energia solar em 2025',
      excerpt: 'Atualização sobre as leis e incentivos fiscais disponíveis para quem investe em energia solar, incluindo financiamentos com taxas reduzidas.',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg',
      date: '05/01/2023',
      author: 'Paulo Mendes',
      category: 'legislacao',
      readTime: '9 min'
    },
    {
      id: 6,
      title: 'Energia solar para empresas: casos de sucesso',
      excerpt: 'Estudo de casos de empresas que implementaram sistemas solares e obtiveram expressiva redução de custos e melhor posicionamento de mercado.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      date: '18/06/2023',
      author: 'Amanda Oliveira',
      category: 'negocios',
      readTime: '10 min'
    }
  ];

  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get featured post (first one)
  const featuredPost = posts[0];

  // Categories for filter
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'educacional', name: 'Educacional' },
    { id: 'financeiro', name: 'Financeiro' },
    { id: 'tecnologia', name: 'Tecnologia' },
    { id: 'legislacao', name: 'Legislação' },
    { id: 'negocios', name: 'Negócios' }
  ];

  // Format category name for display
  const getCategoryName = (id: string) => {
    const category = categories.find(cat => cat.id === id);
    return category ? category.name : id;
  };

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
              Blog SolarBrasil
            </h1>
            <p className="text-xl text-neutral-200 mb-4">
              Acompanhe as novidades, dicas e informações sobre energia solar fotovoltaica
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    {getCategoryName(featuredPost.category)}
                  </span>
                  <h2 className="text-3xl font-montserrat font-bold text-white mb-3">
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center text-neutral-200 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <User size={16} className="mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <Button variant="white" to={`/blog/${featuredPost.id}`}>
                    Ler artigo
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 p-6 rounded-lg h-full">
                <h3 className="text-2xl font-montserrat font-semibold mb-6">
                  Artigos populares
                </h3>
                
                <div className="space-y-6">
                  {posts.slice(1, 4).map((post) => (
                    <div key={post.id} className="flex items-start space-x-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium hover:text-primary-500 transition-colors line-clamp-2">
                          <a href={`/blog/${post.id}`}>{post.title}</a>
                        </h4>
                        <div className="flex items-center text-neutral-500 text-sm mt-1">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    to="/blog" 
                    fullWidth
                  >
                    Ver todos os artigos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={sectionRef} className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Artigos Recentes"
            subtitle="Fique por dentro das últimas novidades do setor de energia solar"
            centered
          />

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-10 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                </div>
              </div>
              
              <div className="md:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`
                  bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  hover:shadow-lg
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-52">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {getCategoryName(post.category)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-neutral-500 text-sm mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span>{post.readTime} de leitura</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-montserrat font-semibold mb-3 line-clamp-2">
                    <a href={`/blog/${post.id}`} className="hover:text-primary-500 transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-neutral-500 text-sm">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <a 
                      href={`/blog/${post.id}`} 
                      className="flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
                    >
                      Ler mais <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-neutral-600">Nenhum artigo encontrado para sua busca.</p>
              <Button 
                variant="primary" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('todos');
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">
              Inscreva-se em nossa newsletter
            </h2>
            <p className="text-neutral-600 mb-8">
              Receba as últimas notícias, dicas e informações sobre energia solar diretamente na sua caixa de entrada.
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                />
                <Button 
                  variant="primary"
                >
                  Inscrever-se
                </Button>
              </div>
              <p className="text-neutral-500 text-sm mt-4">
                Ao se inscrever, você concorda com nossa política de privacidade. Não enviamos spam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;