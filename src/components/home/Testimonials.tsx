import { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Marcelo Silva",
    role: "Proprietário residencial",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "Instalei os painéis há 6 meses e minha conta de luz reduziu em 90%. O investimento está se pagando muito mais rápido do que eu esperava. Além disso, a equipe da SolarBrasil foi extremamente profissional e atenciosa.",
    stars: 5
  },
  {
    id: 2,
    name: "Fernanda Oliveira",
    role: "Proprietária de loja",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: "Como proprietária de uma loja, os custos de energia estavam impactando demais meu negócio. Após a instalação dos painéis solares, consegui redirecionar a economia para investimentos no meu comércio. Indico para todos os lojistas!",
    stars: 5
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "Gestor industrial",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    quote: "Nossa indústria tinha um alto consumo de energia. A SolarBrasil fez um projeto personalizado que superou todas as expectativas. A economia mensal é impressionante e o payback está acontecendo antes do previsto.",
    stars: 5
  },
  {
    id: 4,
    name: "Ana Soares",
    role: "Proprietária de pousada",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    quote: "Nossa pousada no litoral agora é alimentada por energia solar. Além da economia na conta, usamos isso como diferencial de marketing para atrair hóspedes que valorizam a sustentabilidade. Projeto excelente!",
    stars: 4
  }
];

const Testimonials = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <section ref={sectionRef} className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="O que nossos clientes dizem"
          subtitle="Atendemos mais de 5.000 clientes satisfeitos em todo o Brasil"
          centered
        />

        <div className={`
          max-w-5xl mx-auto mt-12 relative
          transition-opacity duration-1000
          ${isInView ? 'opacity-100' : 'opacity-0'}
        `}>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 overflow-hidden">
            <Quote className="h-16 w-16 text-primary-100 absolute top-8 left-8 opacity-50" />
            
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${currentSlide === index ? 'opacity-100 translate-x-0' : 'opacity-0 absolute top-0 translate-x-10'}
                  `}
                  style={{ display: currentSlide === index ? 'block' : 'none' }}
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.stars ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'}`} 
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl mb-6 relative z-10">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <h4 className="text-lg font-montserrat font-semibold">{testimonial.name}</h4>
                        <p className="text-neutral-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-10">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-primary-500 w-8' : 'bg-neutral-300'
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={20} className="text-neutral-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={20} className="text-neutral-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;