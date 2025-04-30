import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, CheckCircle, Calendar, CreditCard, ArrowRight } from 'lucide-react';

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

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start"
    >
      <div className="mr-4 h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const AgendamentoPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const availableDates = [
    '2025-06-15', '2025-06-16', '2025-06-17', 
    '2025-06-18', '2025-06-19', '2025-06-20', 
    '2025-06-21'
  ];
  
  const availableTimes = [
    '08:00', '09:00', '10:00', '11:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];
  
  const doctors = [
    { id: 1, name: 'Dr. Roberto Campos', specialty: 'Cardiologia' },
    { id: 2, name: 'Dra. Camila Santos', specialty: 'Neurologia' },
    { id: 3, name: 'Dr. Marcos Oliveira', specialty: 'Clínica Geral' },
    { id: 4, name: 'Dra. Fernanda Lima', specialty: 'Pediatria' },
    { id: 5, name: 'Dr. Alexandre Costa', specialty: 'Ortopedia' },
    { id: 6, name: 'Dra. Juliana Ferreira', specialty: 'Dermatologia' },
  ];
  
  const specialties = [
    'Cardiologia', 'Neurologia', 'Clínica Geral', 
    'Pediatria', 'Ortopedia', 'Dermatologia',
    'Oftalmologia', 'Endocrinologia', 'Nutrição'
  ];

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' });
  };

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
              Agende sua <span className="text-primary-600">Consulta</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Marque sua consulta de forma rápida e fácil. Escolha a especialidade,
              data e horário que melhor se adequam à sua agenda.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="flex border-b">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`flex-1 p-4 text-center ${
                    step === i
                      ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-600'
                      : step > i
                      ? 'bg-gray-50 text-gray-600'
                      : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        step > i
                          ? 'bg-primary-600 text-white'
                          : step === i
                          ? 'bg-primary-100 text-primary-600 border border-primary-600'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step > i ? <CheckCircle size={16} /> : i}
                    </div>
                    <span className="hidden sm:inline font-medium">
                      {i === 1
                        ? 'Especialidade'
                        : i === 2
                        ? 'Data e Hora'
                        : i === 3
                        ? 'Informações Pessoais'
                        : 'Confirmação'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Selecione a Especialidade e Médico</h2>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Especialidade Médica
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {specialties.map((specialty) => (
                        <button
                          key={specialty}
                          className={`p-3 border rounded-lg text-left ${
                            selectedSpecialty === specialty
                              ? 'border-primary-600 bg-primary-50 text-primary-600'
                              : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50/50'
                          }`}
                          onClick={() => setSelectedSpecialty(specialty)}
                        >
                          {specialty}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Selecione o Médico (Opcional)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {doctors
                        .filter(doctor => !selectedSpecialty || doctor.specialty === selectedSpecialty)
                        .map((doctor) => (
                          <button
                            key={doctor.id}
                            className={`p-4 border rounded-lg text-left ${
                              selectedDoctor === doctor.name
                                ? 'border-primary-600 bg-primary-50 text-primary-600'
                                : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50/50'
                            }`}
                            onClick={() => setSelectedDoctor(doctor.name)}
                          >
                            <div className="font-medium">{doctor.name}</div>
                            <div className="text-sm text-gray-500">{doctor.specialty}</div>
                          </button>
                        ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNextStep}
                      disabled={!selectedSpecialty}
                      className={`btn ${
                        selectedSpecialty ? 'btn-primary' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      Próximo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Selecione a Data e Horário</h2>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data da Consulta
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                      {availableDates.map((date) => (
                        <button
                          key={date}
                          className={`p-3 border rounded-lg text-center ${
                            selectedDate === date
                              ? 'border-primary-600 bg-primary-50 text-primary-600'
                              : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50/50'
                          }`}
                          onClick={() => setSelectedDate(date)}
                        >
                          {formatDate(date)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horário Disponível
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          className={`p-3 border rounded-lg text-center ${
                            selectedTime === time
                              ? 'border-primary-600 bg-primary-50 text-primary-600'
                              : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50/50'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}h
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevStep}
                      className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={!selectedDate || !selectedTime}
                      className={`btn ${
                        selectedDate && selectedTime
                          ? 'btn-primary'
                          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      Próximo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Informações Pessoais</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                        CPF
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Data de nascimento
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
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
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Motivo da consulta (opcional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevStep}
                      className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="btn btn-primary"
                    >
                      Revisar e Confirmar
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Consulta Agendada com Sucesso!</h2>
                    <p className="text-gray-600">
                      Enviamos uma confirmação para o seu e-mail com todos os detalhes.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold mb-4">Detalhes da Consulta</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="mr-3 text-primary-600">
                          <CalendarDays size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Data</p>
                          <p className="font-medium">{selectedDate && formatDate(selectedDate)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-3 text-primary-600">
                          <Clock size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Horário</p>
                          <p className="font-medium">{selectedTime}h</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mr-3 text-primary-600">
                          <Calendar size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Especialidade</p>
                          <p className="font-medium">{selectedSpecialty}</p>
                        </div>
                      </div>
                      
                      {selectedDoctor && (
                        <div className="flex items-start">
                          <div className="mr-3 text-primary-600">
                            <User size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Médico</p>
                            <p className="font-medium">{selectedDoctor}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      Agendar Nova Consulta
                    </button>
                    <button
                      className="btn btn-primary"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Realizar Pagamento
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
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
              Como Funciona o Agendamento
            </h2>
            <p className="text-gray-600">
              Nosso processo de agendamento é simples e rápido, permitindo que você 
              marque sua consulta em apenas alguns passos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Step
              icon={<Calendar size={24} />}
              title="Escolha a Especialidade"
              description="Selecione a especialidade médica de acordo com sua necessidade."
              delay={0.1}
            />
            <Step
              icon={<CalendarDays size={24} />}
              title="Selecione a Data"
              description="Escolha a data e horário que melhor se encaixam na sua agenda."
              delay={0.2}
            />
            <Step
              icon={<User size={24} />}
              title="Preencha seus Dados"
              description="Forneça suas informações pessoais para concluir o agendamento."
              delay={0.3}
            />
            <Step
              icon={<CheckCircle size={24} />}
              title="Confirmação"
              description="Receba a confirmação do agendamento por e-mail ou SMS."
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AgendamentoPage;