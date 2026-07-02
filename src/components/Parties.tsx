import { motion } from 'motion/react';
import { PartyPopper, Briefcase, Sparkles } from 'lucide-react';

export default function Parties() {
  const offerings = [
    {
      icon: <PartyPopper className="w-8 h-8 text-black" />,
      title: 'Birthday Parties',
      desc: 'Celebrate with a bang. Special party packages include private room access, catering options, and a guaranteed unforgettable experience.'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-black" />,
      title: 'Corporate Team Building',
      desc: 'Communication, leadership, and problem-solving under pressure. The perfect corporate outing to build stronger teams.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-black" />,
      title: 'Special Events',
      desc: 'Bachelor/bachelorette parties, proposals, or just a large family gathering. We can customize the experience to make it yours.'
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
              className="text-zinc-400 text-lg mb-10 leading-relaxed"
            >
              Looking for a unique venue in Sudbury? Our facility is equipped to handle groups of up to 30 people simultaneously across our different rooms. We offer dedicated party spaces, catering partnerships, and event coordination.
            </motion.p>

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
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
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
