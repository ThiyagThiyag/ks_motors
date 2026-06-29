import { motion } from 'framer-motion';
import { Wrench, Settings, BatteryCharging, Disc, ShieldCheck, Thermometer, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesList = [
    { icon: Settings, title: 'Performance Tuning', desc: 'Unlock your motor\'s true potential with our advanced ECU tuning and dyno testing. We safely optimize fuel maps, boost curves, and ignition timing.', price: 'Starting at $1,200' },
    { icon: Disc, title: 'Brake Upgrades', desc: 'Carbon-ceramic brake installations, braided line upgrades, and high-performance fluid flushes for ultimate fade-free stopping power on the track.', price: 'Starting at $850' },
    { icon: Thermometer, title: 'Cooling Systems', desc: 'Upgraded radiators, enhanced water pumps, and high-capacity intercoolers to keep temperatures down during intense track sessions or desert driving.', price: 'Starting at $1,500' },
    { icon: BatteryCharging, title: 'EV Maintenance', desc: 'Specialized diagnostics, firmware updates, and battery conditioning specifically tailored for high-performance luxury electric vehicles.', price: 'Starting at $400' },
    { icon: Wrench, title: 'Engine Rebuilds', desc: 'Complete teardowns, forged internals installation, blueprinting, and precision reassembly by our master engine builders.', price: 'Custom Quote' },
    { icon: ShieldCheck, title: 'Multi-Point Inspection', desc: 'Our rigorous 150-point health check ensures every mechanical, electrical, and cosmetic component is operating perfectly.', price: 'Starting at $299' },
  ];

  const faqs = [
    { q: 'Do you offer warranty on repairs and upgrades?', a: 'Yes. All of our workmanship is backed by a 12-month / 12,000-mile warranty. Parts warranties depend on the manufacturer but typically match or exceed this.' },
    { q: 'Can I get a loaner vehicle while my car is being serviced?', a: 'Absolutely. We maintain a fleet of premium loaner vehicles (including Porsche Macan and Audi Q7). Please request a loaner when booking your appointment as they are subject to availability.' },
    { q: 'How long does a typical performance tune take?', a: 'A standard ECU tune and dyno validation usually takes 1 to 2 business days. If we are installing bolt-on components alongside the tune, it may take 3 to 5 days.' },
    { q: 'Do you use OEM parts?', a: 'For maintenance and standard repairs, we exclusively use OEM or higher-grade bespoke components to preserve the pedigree of your vehicle.' },
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-white mb-4">
            Elite <span className="text-primary-500 italic">Maintenance</span>
          </h1>
          <p className="text-accent-500 max-w-2xl mx-auto font-light">
            We offer bespoke maintenance and upgrade services tailored specifically for high-end luxury and performance vehicles.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          {servicesList.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 glass-dark p-8 border border-white/5 hover:border-primary-500/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svc.icon className="w-24 h-24 text-primary-500" />
              </div>
              
              <div className="flex-shrink-0 relative z-10">
                <div className="w-14 h-14 bg-dark-800 border border-white/10 rounded-sm flex items-center justify-center group-hover:border-primary-500 transition-colors">
                  <svc.icon className="w-7 h-7 text-primary-500" />
                </div>
              </div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-2">{svc.title}</h3>
                <p className="text-accent-500 font-light leading-relaxed mb-6 text-sm">{svc.desc}</p>
                
                <div className="flex justify-between items-end mt-auto">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">{svc.price}</span>
                  <button className="text-sm bg-primary-500/10 text-primary-500 px-4 py-2 uppercase tracking-widest font-bold hover:bg-primary-500 hover:text-dark-900 transition-colors rounded-sm">
                    Book
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Guarantee */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-dark-950 border border-primary-500/20 p-10 rounded-sm mb-32 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-primary-500/5 blur-[100px] rounded-full z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white mb-6">Our Promise to You</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-accent-500"><strong className="text-white">White-Glove Handling:</strong> We treat your vehicle as if it were a priceless work of art.</p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-accent-500"><strong className="text-white">Transparent Pricing:</strong> No hidden fees. You approve every repair before we touch a wrench.</p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-accent-500"><strong className="text-white">Live Updates:</strong> Receive photos and video walkarounds via text while your car is in the bay.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-white mb-4">Service FAQ</h2>
            <div className="w-12 h-1 bg-primary-500 mx-auto"></div>
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
    </div>
  );
};

export default Services;
