import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[100px] mix-blend-screen opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-8 pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-sm w-fit"
          >
            Sudbury, Ontario
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-black leading-[0.85] mb-6 uppercase"
          >
            Escape<br />
            <span className="text-primary">The Room.</span><br />
            Find Yourself.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/50 max-w-md mb-8 leading-relaxed"
          >
            Immersive narratives, complex riddles, and physical challenges designed to test your limits in the heart of Greater Sudbury.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
              View All Rooms
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 sm:ml-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-black bg-primary"></div>
                <div className="w-10 h-10 rounded-full border-2 border-black bg-white"></div>
                <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800"></div>
              </div>
              <span className="text-sm font-bold text-white/60">4.9/5 from 2k+ Players</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] transform rotate-3" />
          <div className="absolute inset-0 bg-dark-card border border-white/10 rounded-[3rem] transform -rotate-3 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=1200" 
              alt="People solving an escape room puzzle" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center justify-between"
            >
              <div>
                <div className="text-primary font-bold font-display text-xl">Top Rated</div>
                <div className="text-zinc-300 text-sm">#1 Entertainment in Sudbury</div>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User Avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
