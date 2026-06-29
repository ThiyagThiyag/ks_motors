import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);

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
              className="glass-dark w-full max-w-md rounded-lg overflow-hidden border border-white/10 pointer-events-auto shadow-2xl relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">
                    {isLogin ? 'Welcome Back' : 'Join KS Motors'}
                  </h2>
                  <p className="text-accent-500 text-sm">
                    {isLogin ? 'Enter your credentials to access your account' : 'Create an account to book services and more'}
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                    <input 
                      type="password" 
                      className="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  {isLogin && (
                    <div className="flex justify-end">
                      <a href="#" className="text-xs text-primary-500 hover:text-primary-400">Forgot Password?</a>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="w-full bg-primary-500 text-dark-900 font-bold uppercase tracking-widest py-3 rounded-sm hover:bg-primary-400 transition-colors mt-6 gold-glow"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-primary-500 hover:text-primary-400 font-medium ml-1"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
