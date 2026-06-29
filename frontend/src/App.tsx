import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Motors from './pages/Motors';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CarWash from './pages/CarWash';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white font-sans flex flex-col">
        <Navbar onLoginClick={() => setIsAuthModalOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/motors" element={<Motors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/car-wash" element={<CarWash />} />
          </Routes>
        </main>
        <footer className="bg-dark-800 py-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KS Motors & Service. All rights reserved.</p>
        </footer>
        
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
