import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, Zap, Star, Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-dark-900/70 z-10"></div>
          <img 
            src="/images/hero_car.png" 
            alt="Premium Luxury Sports Car" 
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 uppercase text-white"
          >
            Performance <br/><span className="text-gradient font-light italic">Redefined.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-accent-500 mb-10 max-w-2xl mx-auto font-light"
          >
            Experience the pinnacle of automotive engineering and premium maintenance services. Your journey to perfection starts here.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/motors" className="group relative overflow-hidden bg-primary-500 text-dark-900 px-8 py-4 rounded-sm font-bold text-lg tracking-widest uppercase transition-all gold-glow flex items-center justify-center gap-2">
              <span className="relative z-10 flex items-center gap-2">Explore Inventory <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            <Link to="/services" className="glass hover:bg-white/10 text-white px-8 py-4 rounded-sm font-bold text-lg tracking-widest uppercase transition-all flex items-center justify-center">
              Book a Service
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-10 border-b border-white/5 bg-dark-950 relative z-20">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-xs font-bold text-accent-500 uppercase tracking-widest mb-6">Specializing in Elite Brands</p>
          <div className="flex justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <span className="text-xl font-bold uppercase tracking-widest">Porsche</span>
            <span className="text-xl font-bold uppercase tracking-widest">Ferrari</span>
            <span className="text-xl font-bold uppercase tracking-widest">McLaren</span>
            <span className="text-xl font-bold uppercase tracking-widest">Lamborghini</span>
            <span className="text-xl font-bold uppercase tracking-widest hidden md:block">Aston Martin</span>
          </div>
        </div>
      </section>

      {/* Service Highlight Section */}
      <section className="py-32 relative z-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">State of the art <span className="text-primary-500 italic">Facilities</span></h2>
              <p className="text-accent-500 text-lg mb-8 leading-relaxed font-light">
                Our master technicians utilize the most advanced diagnostic and repair equipment available. From routine maintenance to complex engine rebuilds, we treat every vehicle with the utmost precision and care, ensuring it performs exactly as intended.
              </p>
              <Link to="/services" className="text-primary-500 font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Discover Our Services <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-500/20 blur-3xl transform -rotate-6 rounded-full"></div>
              <img 
                src="/images/service_bay.png" 
                alt="Premium Service Bay" 
                className="relative z-10 rounded-sm shadow-2xl border border-white/10 w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works / Process */}
      <section className="py-24 bg-dark-950 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-widest text-white">The KS Process</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-accent-500 max-w-2xl mx-auto font-light">Whether you're purchasing a hypercar or booking a major service, we ensure a seamless, white-glove experience from start to finish.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2 z-0"></div>
            
            {[
              { step: '01', title: 'Consultation', desc: 'Speak with our specialists to discuss your precise automotive needs and goals.' },
              { step: '02', title: 'Inspection & Strategy', desc: 'We conduct a rigorous 150-point inspection and present a tailored plan.' },
              { step: '03', title: 'Execution', desc: 'Our master craftsmen and technicians execute the plan to perfection.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative z-10 bg-dark-900 border border-white/5 p-8 text-center rounded-sm hover:border-primary-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-dark-800 border-2 border-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  <span className="text-primary-500 font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-widest">{item.title}</h3>
                <p className="text-accent-500 font-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative z-20 bg-dark-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-widest text-white">Client Excellence</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-10 relative border-l-4 border-l-primary-500"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6 text-primary-500">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-accent-500 font-light italic mb-6 leading-relaxed">
                "KS Motors completely transformed the handling of my GT3. Their attention to detail during the suspension tuning was unlike anything I've experienced at a dealership. Truly world-class."
              </p>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider">Jonathan R.</h4>
                <span className="text-xs text-primary-500 uppercase tracking-widest">Porsche 911 GT3 Owner</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-10 relative border-l-4 border-l-primary-500"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6 text-primary-500">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-accent-500 font-light italic mb-6 leading-relaxed">
                "Purchasing my 720S through their inventory was flawless. The white-glove delivery service and the sheer transparency regarding the vehicle's history gave me ultimate peace of mind."
              </p>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider">Marcus D.</h4>
                <span className="text-xs text-primary-500 uppercase tracking-widest">McLaren 720S Owner</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailing Showcase */}
      <section className="py-24 bg-dark-900 relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
            >
              <div className="absolute inset-0 bg-primary-500/20 blur-2xl transform -rotate-3 rounded-full"></div>
              <img 
                src="/images/car_wash.png" 
                alt="Premium Auto Detailing" 
                className="relative z-10 rounded-sm shadow-2xl border border-white/10 w-full h-[450px] object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">Premium Auto <span className="text-primary-500 italic">Detailing</span></h2>
              <p className="text-accent-500 text-lg mb-8 leading-relaxed font-light">
                Give your motor the showroom finish it deserves. Our bespoke hand-wash and detailing studio utilizes PH-neutral chemicals, deionized water, and master-level paint correction to ensure a flawless, swirl-free shine.
              </p>
              <Link to="/car-wash" className="group relative overflow-hidden bg-transparent border border-primary-500 text-primary-500 px-8 py-4 rounded-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 inline-flex hover:bg-primary-500 hover:text-dark-900">
                <span className="relative z-10">Explore Packages</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-dark-950 relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Certified Quality', desc: 'Every vehicle and service meets our rigorous premium standards, ensuring your complete peace of mind.' },
              { icon: Zap, title: 'Unmatched Performance', desc: 'We specialize in high-performance motors that deliver thrilling experiences on every drive.' },
              { icon: Wrench, title: 'Expert Service', desc: 'Our master technicians use state-of-the-art equipment to keep your motor running at its absolute best.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass-dark p-10 rounded-sm text-center hover:-translate-y-2 transition-transform duration-500 group border-t-2 border-t-transparent hover:border-t-primary-500"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:border-primary-500/50 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-widest">{feature.title}</h3>
                <p className="text-accent-500 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
