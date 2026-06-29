import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'Where are you located?', a: 'Our primary showroom and service center is located at 123 Luxury Drive, Beverly Hills, CA. We also have satellite concierge offices in Miami and New York.' },
    { q: 'Do I need an appointment to visit the showroom?', a: 'While walk-ins are welcome to browse our general inventory, we highly recommend scheduling an appointment if you are interested in a specific vehicle or wish to speak with our finance team, ensuring we can provide you with our undivided attention.' },
    { q: 'How quickly will you respond to my inquiry?', a: 'Our concierge team strives to respond to all inquiries within 2 hours during normal business hours. Messages received after hours will be addressed first thing the following business day.' },
    { q: 'Can I book a service appointment online?', a: 'Yes! You can use the form on this page to request a service date. Once we launch our full portal, you will be able to book and manage appointments directly from your account dashboard.' },
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
            Get in <span className="text-primary-500 italic">Touch</span>
          </h1>
          <p className="text-accent-500 max-w-2xl mx-auto font-light">
            Whether you are inquiring about a specific vehicle, looking to book a service, or just have a general question, our team is here to assist you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-800 border border-white/10 rounded-sm flex flex-shrink-0 items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">Our Location</h4>
                    <p className="text-accent-500 font-light">123 Luxury Drive<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-800 border border-white/10 rounded-sm flex flex-shrink-0 items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">Phone Number</h4>
                    <p className="text-accent-500 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-800 border border-white/10 rounded-sm flex flex-shrink-0 items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">Email Address</h4>
                    <p className="text-accent-500 font-light">concierge@ksmotors.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dark-800 border border-white/10 rounded-sm flex flex-shrink-0 items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">Business Hours</h4>
                    <p className="text-accent-500 font-light">Mon - Fri: 9:00 AM - 7:00 PM<br/>Sat: 10:00 AM - 5:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark p-8 border border-white/10 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full"></div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-6">Send a Message</h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none">
                  <option>Vehicle Inquiry</option>
                  <option>Service Booking</option>
                  <option>General Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary-500 text-dark-900 font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-primary-400 transition-colors mt-4 gold-glow"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

        {/* General FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-white mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary-500" /> General FAQ
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
    </div>
  );
};

export default Contact;
