import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

const Contato = () => {
  const [formRef, formInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consumption: '',
    interest: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
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
              Entre em Contato
            </h1>
            <p className="text-xl text-neutral-200 mb-4">
              Estamos prontos para responder suas dúvidas e ajudar a transformar sua relação com energia
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <SectionTitle
                title="Envie uma mensagem"
                subtitle="Preencha o formulário abaixo e entraremos em contato em até 24 horas úteis"
              />

              {formSubmitted ? (
                <div className={`
                  bg-accent-50 border border-accent-200 text-accent-700 rounded-lg p-6 mt-8
                  transition-all duration-500 
                  ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}>
                  <div className="flex items-center mb-4">
                    <div className="bg-accent-500 rounded-full p-2 mr-4">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold">Mensagem enviada com sucesso!</h3>
                  </div>
                  <p className="mb-4">
                    Obrigado por entrar em contato conosco. Um de nossos consultores entrará em contato com você em breve para fornecer todas as informações necessárias.
                  </p>
                  <Button 
                    variant="primary" 
                    onClick={() => setFormSubmitted(false)}
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className={`
                    mt-8 space-y-6
                    transition-all duration-1000 
                    ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-neutral-700 mb-2">
                        Nome completo <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactInfo.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-neutral-700 mb-2">
                        E-mail <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-neutral-700 mb-2">
                        Telefone <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contactInfo.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-neutral-700 mb-2">
                        Assunto <span className="text-primary-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={contactInfo.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      >
                        <option value="" disabled>Selecione um assunto</option>
                        <option value="orcamento">Solicitar orçamento</option>
                        <option value="duvida">Dúvidas sobre energia solar</option>
                        <option value="suporte">Suporte técnico</option>
                        <option value="comercial">Contato comercial</option>
                        <option value="outros">Outros assuntos</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="consumption" className="block text-neutral-700 mb-2">
                        Consumo mensal de energia (kWh ou R$)
                      </label>
                      <input
                        type="text"
                        id="consumption"
                        name="consumption"
                        value={contactInfo.consumption}
                        onChange={handleChange}
                        className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="Ex: 500kWh ou R$ 400"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-neutral-700 mb-2">
                        Tipo de instalação
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={contactInfo.interest}
                        onChange={handleChange}
                        className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      >
                        <option value="" disabled>Selecione o tipo</option>
                        <option value="residencial">Residencial</option>
                        <option value="comercial">Comercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="rural">Rural</option>
                        <option value="nao_sei">Não sei ainda</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-neutral-700 mb-2">
                      Mensagem <span className="text-primary-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactInfo.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="Descreva sua necessidade ou dúvida em detalhes..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="privacy" className="text-neutral-700 text-sm">
                      Concordo com a <a href="#" className="text-primary-500 hover:underline">Política de Privacidade</a> e com o uso dos meus dados para contato
                    </label>
                  </div>

                  <div>
                    <Button
                      variant="primary"
                      type="submit"
                      className="flex items-center"
                    >
                      Enviar mensagem
                      <Send size={16} className="ml-2" />
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-lg shadow-sm p-8 h-full">
                <h3 className="text-2xl font-montserrat font-semibold mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-primary-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Endereço</h4>
                      <p className="text-neutral-600">
                        Av. Paulista, 1000<br />
                        São Paulo - SP, 01310-000
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-primary-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Telefone</h4>
                      <p className="text-neutral-600">
                        <a href="tel:+551199999999" className="hover:text-primary-500 transition-colors">
                          (11) 9999-9999
                        </a>
                      </p>
                      <p className="text-neutral-600">
                        <a href="tel:+551132320000" className="hover:text-primary-500 transition-colors">
                          (11) 3232-0000
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-primary-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">E-mail</h4>
                      <p className="text-neutral-600">
                        <a href="mailto:contato@solarbrasil.com.br" className="hover:text-primary-500 transition-colors">
                          contato@solarbrasil.com.br
                        </a>
                      </p>
                      <p className="text-neutral-600">
                        <a href="mailto:comercial@solarbrasil.com.br" className="hover:text-primary-500 transition-colors">
                          comercial@solarbrasil.com.br
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-primary-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Horário de Atendimento</h4>
                      <p className="text-neutral-600">
                        Segunda a Sexta: 08h às 18h<br />
                        Sábado: 09h às 13h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Siga-nos nas redes sociais</h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-neutral-200 hover:bg-primary-500 hover:text-white p-2 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-neutral-200 hover:bg-primary-500 hover:text-white p-2 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-neutral-200 hover:bg-primary-500 hover:text-white p-2 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-neutral-200 hover:bg-primary-500 hover:text-white p-2 rounded-full transition-colors"
                      aria-label="YouTube"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossa Localização"
            subtitle="Visite nosso escritório central em São Paulo"
            centered
          />
          
          <div className="mt-8 h-96 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976348471546!2d-46.654254825355616!3d-23.565384178726558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7ebdf2893%3A0x2b85d2e6a051bcce!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680178648520!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da SolarBrasil"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Respostas para as dúvidas mais comuns sobre nossos serviços"
            centered
          />

          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            {[
              {
                question: "Quanto tempo leva para receber um orçamento?",
                answer: "Após o preenchimento do formulário de contato, nossa equipe entrará em contato em até 24 horas úteis para agendar uma visita técnica ou fornecer um pré-orçamento com base nas informações fornecidas."
              },
              {
                question: "Vocês atendem todo o Brasil?",
                answer: "Sim, temos escritórios e equipes técnicas em várias regiões do Brasil. Para localidades mais remotas, podemos trabalhar com parceiros certificados que seguem nossos padrões de qualidade."
              },
              {
                question: "Quais informações são necessárias para um orçamento preciso?",
                answer: "As informações mais importantes são: valor médio da conta de luz, consumo em kWh, tipo de telhado, localização do imóvel e, se possível, fotos do local onde deseja instalar os painéis solares."
              },
              {
                question: "Realizam visita técnica antes do orçamento final?",
                answer: "Sim, para garantir a precisão do orçamento e a qualidade do projeto, realizamos uma visita técnica para avaliar as condições do local, incidência solar, tipo de telhado e outros fatores importantes."
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

export default Contato;