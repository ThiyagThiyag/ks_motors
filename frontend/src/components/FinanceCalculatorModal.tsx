import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator } from 'lucide-react';

interface FinanceCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FinanceCalculatorModal = ({ isOpen, onClose }: FinanceCalculatorModalProps) => {
  const [price, setPrice] = useState(2500000);
  const [downPayment, setDownPayment] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(60); // months
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const principal = price - downPayment;
    const ratePerMonth = interestRate / 100 / 12;
    if (principal > 0 && ratePerMonth > 0 && term > 0) {
      const calculatedEmi = 
        (principal * ratePerMonth * Math.pow(1 + ratePerMonth, term)) / 
        (Math.pow(1 + ratePerMonth, term) - 1);
      setEmi(Math.round(calculatedEmi));
    } else {
      setEmi(0);
    }
  }, [price, downPayment, interestRate, term]);

  const formatINR = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="glass-dark w-full max-w-lg rounded-sm overflow-hidden border border-primary-500/30 pointer-events-auto shadow-[0_0_50px_rgba(212,175,55,0.15)] relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-8 h-8 text-primary-500" />
                  <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
                    Finance Calculator
                  </h2>
                </div>
                
                <p className="text-accent-500 text-sm mb-8 font-light">
                  Estimate your monthly EMI. Actual rates may vary based on your credit profile and our lending partners.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-400 uppercase tracking-widest">Vehicle Price</label>
                      <span className="text-white font-mono">{formatINR(price)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000000" 
                      max="15000000" 
                      step="100000"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full accent-primary-500 h-1 bg-dark-800 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-400 uppercase tracking-widest">Down Payment</label>
                      <span className="text-white font-mono">{formatINR(downPayment)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max={price} 
                      step="50000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full accent-primary-500 h-1 bg-dark-800 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Interest Rate (%)</label>
                      <input 
                        type="number" 
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors font-mono"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Term (Months)</label>
                      <select 
                        value={term}
                        onChange={(e) => setTerm(Number(e.target.value))}
                        className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none font-mono"
                      >
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                        <option value="36">36 Months</option>
                        <option value="48">48 Months</option>
                        <option value="60">60 Months</option>
                        <option value="72">72 Months</option>
                        <option value="84">84 Months</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-10 bg-dark-950 p-6 rounded-sm border border-primary-500/20 text-center">
                  <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Estimated Monthly EMI</p>
                  <p className="text-4xl font-bold text-primary-500 font-mono tracking-tight">{formatINR(emi)}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FinanceCalculatorModal;
