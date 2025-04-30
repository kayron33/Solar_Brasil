import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

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

const ContactItem: React.FC<{icon: React.ReactNode; title: string; children: React.ReactNode; delay?: number}> = ({
  icon,
  title,
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start"
    >
      <div className="mt-1 mr-4 h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {children}
      </div>
    </motion.div>
  );
};

const ContatoPage: React.FC = () => {
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
              Entre em <span className="text-primary-600">Contato</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Estamos à disposição para tirar suas dúvidas, ouvir sugestões e 
              agendar sua consulta. Entre em contato e conheça nossa clínica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactItem icon={<Phone size={24} />} title="Telefone" delay={0.1}>
                <p className="text-gray-700">Central de Atendimento</p>
                <a href="tel:+551199999999" className="text-primary-600 font-medium hover:text-primary-700">
                  (11) 9999-9999
                </a>
              </ContactItem>
              
              <ContactItem icon={<Mail size={24} />} title="Email" delay={0.2}>
                <p className="text-gray-700">Para informações e agendamentos</p>
                <a href="mailto:contato@clinicasaude.com.br" className="text-primary-600 font-medium hover:text-primary-700">
                  contato@clinicasaude.com.br
                </a>
              </ContactItem>
              
              <ContactItem icon={<MapPin size={24} />} title="Endereço" delay={0.3}>
                <p className="text-gray-700">
                  Av. Paulista, 1000<br />
                  São Paulo, SP, 01310-100
                </p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center mt-2">
                  Ver no mapa
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </ContactItem>
              
              <ContactItem icon={<Clock size={24} />} title="Horário de Atendimento" delay={0.4}>
                <ul className="space-y-1 text-gray-700">
                  <li>Segunda à Sexta: 08:00 - 20:00</li>
                  <li>Sábado: 08:00 - 14:00</li>
                  <li>Domingo: Fechado</li>
                </ul>
              </ContactItem>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                  <MessageSquare size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Envie-nos uma mensagem</h2>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Selecione uma opção</option>
                    <option value="agendamento">Agendamento de Consulta</option>
                    <option value="informacoes">Informações sobre Serviços</option>
                    <option value="convenios">Convênios e Planos</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-1 mr-2"
                  />
                  <p className="text-gray-600 text-sm">
                    Concordo com a Política de Privacidade e autorizo o uso dos meus dados para contato.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
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
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Nossa Localização
            </h2>
            <p className="text-gray-600">
              Estamos localizados em uma região central e de fácil acesso,
              com estacionamento próprio e diversas opções de transporte público.
            </p>
          </motion.div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976521247163!2d-46.6584903!3d-23.565599099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1665000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContatoPage;