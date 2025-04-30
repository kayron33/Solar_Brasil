import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Calculator, Lightbulb, PiggyBank, ArrowRight } from 'lucide-react';

const SolarCalculator = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  const [monthlyBill, setMonthlyBill] = useState<string>('500');
  const [region, setRegion] = useState<string>('sudeste');
  const [roofType, setRoofType] = useState<string>('ceramica');
  const [calculationDone, setCalculationDone] = useState<boolean>(false);

  // Simplified calculation for demonstration
  const calculateSolarSystem = () => {
    // Parsing the monthly bill to a number
    const billValue = parseFloat(monthlyBill);
    
    if (isNaN(billValue) || billValue <= 0) {
      return null;
    }

    // Simple calculation based on bill value and solar radiation by region
    const consumptionKwh = billValue / 0.9; // Approximate kWh based on average tariff
    
    // Solar radiation factor by region (simplified)
    const radiationFactor = {
      'norte': 5.5,
      'nordeste': 5.8,
      'centro-oeste': 5.4,
      'sudeste': 5.2,
      'sul': 4.8
    }[region];
    
    // System size calculation (kWp)
    const systemSize = (consumptionKwh / 30) / (radiationFactor * 0.8);
    
    // Number of panels (assuming 400W panels)
    const numberOfPanels = Math.ceil(systemSize * 1000 / 400);
    
    // Estimated cost (simplified)
    const estimatedCost = systemSize * 5000; // R$ 5.000 per kWp
    
    // Monthly savings (around 90% of current bill)
    const monthlySavings = billValue * 0.9;
    
    // Payback period in years
    const paybackYears = estimatedCost / (monthlySavings * 12);
    
    // Return the calculation results
    return {
      systemSize: systemSize.toFixed(2),
      numberOfPanels,
      estimatedCost: estimatedCost.toFixed(2),
      monthlySavings: monthlySavings.toFixed(2),
      paybackYears: paybackYears.toFixed(1),
      yearSavings: (monthlySavings * 12).toFixed(2)
    };
  };

  const handleCalculate = () => {
    setCalculationDone(true);
  };

  const results = calculateSolarSystem();

  const formatCurrency = (value: string) => {
    return parseFloat(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-white"
      id="calculadora"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Calcule sua economia"
          subtitle="Descubra quanto pode economizar em energia solar"
          centered
        />

        <div className={`
          max-w-5xl mx-auto mt-12 bg-neutral-50 rounded-xl shadow-md overflow-hidden
          transition-all duration-1000
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
        `}>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-primary-500 text-white p-8 flex flex-col justify-center">
              <div className="mb-6">
                <Calculator size={48} className="text-secondary-500" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                Descubra quanto pode economizar com energia solar
              </h3>
              <p className="mb-6">
                Preencha os campos ao lado para calcular a economia potencial e o dimensionamento aproximado do seu sistema fotovoltaico.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Lightbulb size={20} className="text-secondary-500 mr-2" />
                  <span>Reduza até 95% da sua conta de luz</span>
                </li>
                <li className="flex items-center">
                  <PiggyBank size={20} className="text-secondary-500 mr-2" />
                  <span>Investimento com retorno garantido</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={20} className="text-secondary-500 mr-2" />
                  <span>Valorize seu imóvel com energia limpa</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-3 p-8">
              <div className="mb-8">
                <h3 className="text-xl font-montserrat font-semibold mb-6">Informe seus dados:</h3>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="monthly-bill" className="block text-neutral-700 mb-2">
                      Valor médio da conta de luz mensal (R$)
                    </label>
                    <input
                      id="monthly-bill"
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="Ex: 500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="region" className="block text-neutral-700 mb-2">
                      Região do Brasil
                    </label>
                    <select
                      id="region"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    >
                      <option value="norte">Norte</option>
                      <option value="nordeste">Nordeste</option>
                      <option value="centro-oeste">Centro-Oeste</option>
                      <option value="sudeste">Sudeste</option>
                      <option value="sul">Sul</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="roof-type" className="block text-neutral-700 mb-2">
                      Tipo de telhado
                    </label>
                    <select
                      id="roof-type"
                      value={roofType}
                      onChange={(e) => setRoofType(e.target.value)}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    >
                      <option value="ceramica">Cerâmica/Concreto</option>
                      <option value="fibrocimento">Fibrocimento</option>
                      <option value="metalico">Metálico</option>
                      <option value="laje">Laje</option>
                    </select>
                  </div>
                  
                  <div>
                    <Button
                      variant="primary"
                      onClick={handleCalculate}
                      fullWidth
                    >
                      Calcular Economia
                    </Button>
                  </div>
                </div>
              </div>
              
              {calculationDone && results && (
                <div className="border-t pt-6 animate-fadeIn">
                  <h3 className="text-xl font-montserrat font-semibold mb-4">Resultado:</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-neutral-500 text-sm">Potência do sistema</p>
                      <p className="text-xl font-semibold">{results.systemSize} kWp</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-neutral-500 text-sm">Número de painéis</p>
                      <p className="text-xl font-semibold">{results.numberOfPanels} painéis</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-neutral-500 text-sm">Economia mensal</p>
                      <p className="text-xl font-semibold text-accent-500">{formatCurrency(results.monthlySavings)}</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                      <p className="text-neutral-500 text-sm">Economia em 25 anos</p>
                      <p className="text-xl font-semibold text-accent-500">{formatCurrency((parseFloat(results.yearSavings) * 25).toFixed(2))}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      variant="secondary"
                      to="/contato"
                      fullWidth
                    >
                      Solicitar Orçamento Detalhado
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;