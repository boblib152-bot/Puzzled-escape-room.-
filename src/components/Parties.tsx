import { motion } from 'motion/react';
import { PartyPopper, Briefcase, Sparkles } from 'lucide-react';

export default function Parties() {
  const offerings = [
    {
      icon: <PartyPopper className="w-8 h-8 text-black" />,
      title: 'Birthday Parties',
      desc: 'Celebrate a birthday with us! Kids are welcome to play by themselves (if under 12, an adult must remain on site) and are given extra hints and clues for success.'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-black" />,
      title: 'Corporate Team Building',
      desc: 'Communication, leadership, and problem-solving under pressure. We can accommodate group bookings outside regular hours of operation.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-black" />,
      title: 'Group Events & Rates',
      desc: 'Perfect for bachelor(ette) parties, field trips, or family outings. Admission is $30/player (+tax) with a maximum capacity of 25 players per hour.'
    }
  ];

  return (
    <section id="parties" className="py-32 relative overflow-hidden bg-dark-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-display font-black uppercase mb-6"
            >
              MORE THAN JUST A GAME. <br />
              <span className="text-primary">HOST AN EVENT.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg mb-6 leading-relaxed"
            >
              Looking for a unique event activity in Sudbury? Escape rooms make the perfect activity for birthdays, bachelor(ette) parties, field trips, or team building! Everyone loves being puzzled.
            </motion.p>

            {/* Construction Alert */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex items-start gap-3"
            >
              <div className="bg-yellow-500 text-black px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider mt-0.5 shrink-0">
                Notice
              </div>
              <p className="text-sm text-zinc-300">
                Our party room is currently under construction. While we cannot offer on-site space for cake/presents, groups of up to 25 players can book games simultaneously!
              </p>
            </motion.div>

            <div className="space-y-6">
              {offerings.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(255,213,0,0.3)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fine Print */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 pt-6 border-t border-white/10 text-xs text-zinc-500 space-y-2"
            >
              <h5 className="font-bold text-zinc-400 uppercase tracking-widest text-[10px] mb-2">The Fine Print</h5>
              <p>• Changes in group size must be communicated at least 72 hours prior to the booking start time. Reductions without notice will be charged at the original booking size.</p>
              <p>• Deposits are non-refundable within 48 hours of the booking start time. Bookings require a deposit equivalent to one person's admission ($33.90 tax inc.).</p>
              <p>• If your group is more than 25 players, you will be split in half and play over the course of 2 hours.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <button 
                onClick={() => {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all transform hover:scale-105 active:scale-95"
              >
                INQUIRE ABOUT EVENTS
              </button>
            </motion.div>
          </div>

          {/* Visual Grid */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" 
                alt="Event party" 
                className="w-full h-64 object-cover rounded-3xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                alt="Team building" 
                className="w-full h-64 object-cover rounded-3xl mt-8"
              />
            </motion.div>
            
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[80px] rounded-full -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
