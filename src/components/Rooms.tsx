import { motion } from 'motion/react';
import { Users, Clock, Flame } from 'lucide-react';
import { ROOMS } from '../data';

export default function Rooms() {
  return (
    <section id="rooms" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black uppercase mb-6"
            >
              CHOOSE YOUR <span className="text-primary">ESCAPE</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg"
            >
              Each room is a meticulously crafted world with its own story, challenges, and secrets. Which reality will you step into?
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10 pointer-events-none" />
                <div className="absolute inset-0 border-4 border-primary/0 group-hover:border-primary/50 transition-all z-20 pointer-events-none" />
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Fixed Badge for Price */}
                <div className="absolute top-6 right-6 bg-primary text-black rounded-full w-12 h-12 flex items-center justify-center font-black rotate-12 z-20 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                  $25
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-white">{room.minPlayers}-{room.maxPlayers}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-white">{room.durationMins}M</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative z-20 bg-dark-card mt-[-2rem] rounded-t-3xl border-t border-white/5">
                <div className="mb-2">
                  <div className="text-primary font-bold text-xs uppercase mb-1 tracking-widest">
                    {room.difficulty > 3 ? 'Expert' : room.difficulty > 2 ? 'Intermediate' : 'Beginner'}
                  </div>
                  <h3 className="text-2xl font-display font-black text-white">{room.title}</h3>
                  <p className="text-xs text-white/40 mt-1">{room.durationMins} Minutes • {room.minPlayers}-{room.maxPlayers} Players</p>
                </div>
                
                <p className="text-white/60 text-sm mt-4 mb-8 flex-grow leading-relaxed">
                  {room.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Difficulty</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Flame 
                          key={i} 
                          className={`w-4 h-4 ${i < room.difficulty ? 'text-primary fill-primary' : 'text-zinc-700'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      const el = document.getElementById('booking');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm font-bold text-white group-hover:text-primary transition-colors flex items-center gap-1"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
