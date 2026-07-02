import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface NavbarProps {
  currentView: 'home' | 'faq';
  navigateTo: (view: 'home' | 'faq', targetId?: string) => void;
}

export default function Navbar({ currentView, navigateTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'faq') {
      navigateTo('faq');
    } else {
      navigateTo('home', id);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darker/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => navigateTo('home')}
        >
          <img 
            src={logoImg} 
            alt="Puzzled Escape Rooms" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Rooms', 'Parties', 'FAQ', 'Location'].map((item) => {
            const isLinkActive = item.toLowerCase() === 'faq' ? currentView === 'faq' : currentView === 'home';
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  isLinkActive ? 'text-primary' : 'text-white/70 hover:text-primary'
                }`}
              >
                {item}
              </button>
            );
          })}
          <button 
            onClick={() => handleNavClick('booking')}
            className="bg-primary text-black px-6 py-2 rounded-full font-black text-sm uppercase shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:bg-primary-hover transition-all transform hover:scale-105 active:scale-95"
          >
            Book Game
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-card border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {['Rooms', 'Parties', 'FAQ', 'Location'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-left text-lg font-medium text-zinc-300 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('booking')}
                className="bg-primary text-black px-6 py-3 rounded-xl font-bold text-center mt-4"
              >
                BOOK NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
