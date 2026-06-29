import { motion } from 'framer-motion';
import { ChevronDown, ShieldCheck, Banknote, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import FinanceCalculatorModal from '../components/FinanceCalculatorModal';
import InspectionChecklistModal from '../components/InspectionChecklistModal';

const Motors = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isFinanceModalOpen, setIsFinanceModalOpen] = useState(false);
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);

  const cars = [
    { id: 1, name: 'Custom Mahindra Thar', year: 2024, price: '₹ 25,00,000', specs: '150 hp | 4x4 Premium', img: '/images/thar.png' },
    { id: 2, name: 'Tata Safari Dark Edition', year: 2024, price: '₹ 27,50,000', specs: '168 hp | Kryotec Diesel', img: '/images/safari.png' },
    { id: 3, name: 'Toyota Fortuner GR-S', year: 2023, price: '₹ 51,44,000', specs: '201 hp | 4x4 AT', img: '/images/fortuner.png' },
    { id: 4, name: 'Mahindra XUV700 AX7L', year: 2024, price: '₹ 26,99,000', specs: '197 hp | AWD', img: '/images/xuv700.png' },
    { id: 5, name: 'Kia EV6 GT-Line', year: 2023, price: '₹ 60,95,000', specs: '320 hp | Electric AWD', img: '/images/ev6.png' },
    { id: 6, name: 'Hyundai Ioniq 5', year: 2024, price: '₹ 46,05,000', specs: '214 hp | Electric RWD', img: '/images/ioniq5.png' },
  ];

  const faqs = [
    { q: 'Do you accept trade-ins?', a: 'Yes, we accept high-end and exotic vehicles for trade-in. We offer competitive valuations based on current market data and a physical appraisal.' },
    { q: 'Can you ship vehicles internationally?', a: 'Absolutely. We partner with specialized enclosed transport and international freight forwarders to deliver your vehicle safely anywhere in the world.' },
    { q: 'Do you offer financing?', a: 'Yes, we work with a network of boutique lending institutions that specialize in exotic and high-net-worth vehicle financing, offering flexible terms up to 144 months.' },
    { q: 'Can I request a bespoke sourcing of a specific car?', a: 'Yes. If you are looking for a rare or specific specification that is not currently in our inventory, our concierge service can source it through our global network.' },
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white mb-4">
            Exclusive <span className="text-primary-500 italic">Inventory</span>
          </h1>
          <p className="text-accent-500 max-w-2xl mx-auto font-light">
            Browse our curated selection of high-performance and luxury vehicles. Each motor meets our uncompromising standards of excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-sm overflow-hidden group cursor-pointer border border-white/5 hover:border-primary-500/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-dark-900/80 backdrop-blur-sm px-3 py-1 text-primary-500 font-bold tracking-widest text-sm border border-primary-500/30">
                  {car.year}
                </div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2 group-hover:text-primary-500 transition-colors">{car.name}</h3>
                <p className="text-accent-500 text-sm font-mono mb-4">{car.specs}</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-4">
                  <span className="text-lg font-bold text-white">{car.price}</span>
                  <button className="text-primary-500 text-sm uppercase tracking-widest font-bold hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Banners */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-950 border-t-2 border-t-primary-500 p-8 rounded-sm relative overflow-hidden"
          >
            <Banknote className="absolute -bottom-4 -right-4 w-32 h-32 text-primary-500/5" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-4">Bespoke Financing</h3>
              <p className="text-accent-500 font-light text-sm leading-relaxed mb-6">
                Acquiring your dream car should be as seamless as driving it. We partner with elite financial institutions to offer tailored leasing and financing structures that respect your capital.
              </p>
              <button 
                onClick={() => setIsFinanceModalOpen(true)}
                className="text-sm border border-primary-500 text-primary-500 px-6 py-2 uppercase tracking-widest font-bold hover:bg-primary-500 hover:text-dark-900 transition-colors rounded-sm"
              >
                Calculate Rates
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-950 border-t-2 border-t-primary-500 p-8 rounded-sm relative overflow-hidden"
          >
            <ShieldCheck className="absolute -bottom-4 -right-4 w-32 h-32 text-primary-500/5" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-4">The 150-Point Guarantee</h3>
              <p className="text-accent-500 font-light text-sm leading-relaxed mb-6">
                Every vehicle in our inventory undergoes a rigorous 150-point inspection by factory-trained master technicians. We verify mechanical integrity, software provenance, and cosmetic perfection.
              </p>
              <button 
                onClick={() => setIsChecklistModalOpen(true)}
                className="text-sm border border-primary-500 text-primary-500 px-6 py-2 uppercase tracking-widest font-bold hover:bg-primary-500 hover:text-dark-900 transition-colors rounded-sm"
              >
                View Checklist
              </button>
            </div>
          </motion.div>
        </div>

        {/* Sales FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-white mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary-500" /> Purchasing FAQ
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-sm overflow-hidden bg-dark-950"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
                >
                  <span className="font-bold text-white tracking-wide">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-accent-500 text-sm font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <FinanceCalculatorModal 
        isOpen={isFinanceModalOpen} 
        onClose={() => setIsFinanceModalOpen(false)} 
      />
      
      <InspectionChecklistModal 
        isOpen={isChecklistModalOpen} 
        onClose={() => setIsChecklistModalOpen(false)} 
      />
    </div>
  );
};

export default Motors;
