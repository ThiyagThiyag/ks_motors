import { motion } from 'framer-motion';
import { Sparkles, Droplets, Shield, Clock } from 'lucide-react';

const CarWash = () => {
  const packages = [
    {
      name: "Signature Exterior Wash",
      price: "₹ 2,500",
      features: [
        "PH-Neutral Snow Foam Soak",
        "Two-Bucket Hand Wash",
        "Wheel & Caliper Deep Clean",
        "Touchless Air Dry",
        "Premium Carnauba Wax Finish"
      ]
    },
    {
      name: "Interior & Exterior Detailing",
      price: "₹ 5,500",
      features: [
        "Signature Exterior Wash included",
        "Deep Interior Vacuum & Steam Clean",
        "Leather Conditioning & UV Protection",
        "Alcantara Brush & Clean",
        "Glass Polish & Hydrophobic Coating"
      ],
      popular: true
    },
    {
      name: "Ceramic Coating Elite",
      price: "₹ 25,000",
      features: [
        "Full Paint Correction & Polishing",
        "9H Ceramic Coating Application",
        "5-Year Paint Protection Guarantee",
        "Wheel Barrel Ceramic Coating",
        "Full Interior Detailing Included"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white mb-6">
              Premium <span className="text-primary-500 italic">Detailing</span>
            </h1>
            <p className="text-accent-500 font-light leading-relaxed mb-8">
              Experience the ultimate rejuvenation for your luxury vehicle. Our state-of-the-art detailing studio uses only the finest PH-neutral chemicals, deionized water, and meticulous hand-wash techniques to ensure a flawless, swirl-free finish.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5 text-primary-500" /> <span className="text-sm font-bold uppercase tracking-widest">Swirl-Free Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Droplets className="w-5 h-5 text-primary-500" /> <span className="text-sm font-bold uppercase tracking-widest">Deionized Water</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-primary-500/20 blur-3xl transform rotate-3 rounded-full"></div>
            <img 
              src="/images/car_wash.png" 
              alt="Premium Car Wash" 
              className="relative z-10 rounded-sm shadow-2xl border border-white/10 w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Pricing Packages */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white mb-4">Detailing Packages</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-dark rounded-sm p-8 flex flex-col relative overflow-hidden border ${pkg.popular ? 'border-primary-500' : 'border-white/5 hover:border-primary-500/50'} transition-colors`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-dark-900 font-bold text-xs uppercase tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-primary-500 font-mono mb-6 pb-6 border-b border-white/10">{pkg.price}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-accent-500 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 text-sm font-bold uppercase tracking-widest rounded-sm transition-colors ${pkg.popular ? 'bg-primary-500 text-dark-900 hover:bg-primary-400 gold-glow' : 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-dark-900'}`}>
                Book Appointment
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CarWash;
