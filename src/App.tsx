import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Parties from './components/Parties';
import Booking from './components/Booking';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'faq'>('home');

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#faq') {
        setCurrentView('faq');
        window.scrollTo({ top: 0 });
      } else {
        setCurrentView('home');
        const targetId = window.location.hash.substring(1);
        if (targetId && targetId !== 'faq') {
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash on load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: 'home' | 'faq', targetId?: string) => {
    if (view === 'faq') {
      window.location.hash = 'faq';
    } else {
      window.location.hash = targetId || '';
    }
  };

  return (
    <div className="min-h-screen bg-darker flex flex-col justify-between">
      <div>
        <Navbar currentView={currentView} navigateTo={navigateTo} />
        <main>
          {currentView === 'faq' ? (
            <FAQs navigateTo={navigateTo} />
          ) : (
            <>
              <Hero />
              <Rooms />
              <Parties />
              <Booking />
            </>
          )}
        </main>
      </div>
      <Footer currentView={currentView} navigateTo={navigateTo} />
    </div>
  );
}
