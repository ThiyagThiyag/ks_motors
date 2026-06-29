import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-extrabold text-2xl tracking-widest uppercase text-white">
                KS <span className="text-primary-500">Motors</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {['Home', 'Motors', 'Services', 'Car Wash', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                const isActive = location.pathname === path;
                
                return (
                  <Link 
                    key={item}
                    to={path} 
                    className={`relative text-sm uppercase tracking-widest transition-colors group ${isActive ? 'text-white' : 'text-accent-500 hover:text-white'}`}
                  >
                    {item}
                    <span className={`absolute -bottom-2 left-0 h-[2px] bg-primary-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                );
              })}
              <button onClick={onLoginClick} className="bg-primary-500/10 border border-primary-500/50 hover:bg-primary-500 hover:text-dark-900 text-primary-500 px-6 py-2 rounded-sm text-sm uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer">
                Login
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-accent-500 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark absolute w-full border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {['Home', 'Motors', 'Services', 'Car Wash', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                const isActive = location.pathname === path;

                return (
                  <Link 
                    key={item}
                    to={path} 
                    className={`text-lg uppercase tracking-widest transition-colors ${isActive ? 'text-primary-500 font-bold' : 'text-accent-500 hover:text-primary-500'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onLoginClick();
                }} 
                className="text-primary-500 text-lg uppercase tracking-widest mt-4 text-left cursor-pointer"
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
