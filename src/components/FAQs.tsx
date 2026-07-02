import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowLeft } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    question: "What is an escape room?",
    answer: "Escape rooms are timed, room-size puzzles built around a story or theme. They require players to work together and communicate to work through all the puzzles and complete the game before time runs out."
  },
  {
    question: "How much does it cost to play?",
    answer: "Our games cost $30 + tax per player. Children 7 and younger play for free."
  },
  {
    question: "The website says the rooms are recommended for 2-7 players; can we still play if our group size is outside of that?",
    answer: "Our current games are recommended for 2-7 players because of the physical size of the rooms, as well as the number and pacing of the puzzles. You are able to go over the maximum recommended number of players, however you may find yourselves tight on space and finishing the game before the 1-hour mark.\n\nAnother option for groups of 8 or more players is to divide into smaller groups and have each team play a different game at the same time."
  },
  {
    question: "Can I make a booking outside of your posted hours?",
    answer: "Yes! We are able to accommodate bookings outside of posted hours of operation. Contact us by phone or email to discuss your groups' specific needs."
  },
  {
    question: "Can my children play the escape rooms?",
    answer: "We recommend ages 10+ due to our puzzles' complexity and occasional mature themes and content in our rooms. If accompanied by an adult, children younger than 10 can play. Children 7 and under can accompany an adult free of charge. Also, please note that all of our bookings are private, so whomever you book with is who you will play with; if your group is okay with young children in the room - so are we (babies included)!"
  },
  {
    question: "Are your escape rooms difficult?",
    answer: "Each of our rooms is designed to be a challenge, but they are not unbeatable! Every room is solvable if you work as a team, and if you are ever stumped, we are ready to give helpful hints along the way!"
  },
  {
    question: "Are your escape rooms scary?",
    answer: "No, our rooms are not intended to scare players. Although sometimes the accompanying story to a room may leave players with a sense of urgency, we do not have jump scares."
  },
  {
    question: "Are your rooms wheelchair accessible?",
    answer: "Our new location is wheelchair accessible! We are doing our best to update the space to make our games and space fully accessible to all players. Our Loft (private party room), is on the second floor unfortunately. However all our games are on the main floor, with no stairs, and all game doorways are a minimum of 36\".\n\nFor private parties with players who are unable to access upstairs, a private booking for use of our lobby can be accommodated. When designing puzzles, we are mindful of people of all abilities. If you have any feedback regarding how we can make our location and games more accessible, please let us know. We are working toward making things accessible for everyone. We appreciate your patience as we work to meet this goal."
  },
  {
    question: "Am I going to feel claustrophobic?",
    answer: "Every room is comfortable. You always have an emergency exit available to come and go as you please if the need arises - keep in mind, the game timer doesn't pause if you take a break, so hurry back!"
  },
  {
    question: "Do I need to make a booking, or can I walk in?",
    answer: "While we try to accommodate walk-ins, we generally operate by booking only, so the rooms may already be booked. For your best chance of playing the room you want - call ahead."
  },
  {
    question: "How can I pay?",
    answer: "We accept cash, credit, or debit. Keep in mind that bookings require a deposit equivalent to the cost of one person's admission (tax included) - $33.90. Deposits can be paid with credit card over the phone, online with the invoice, or by e-transfer."
  },
  {
    question: "Do I need to arrive early?",
    answer: "We ask that you show up 10-15 minutes before your booking start time to use the washroom, be briefed on safety, and start on time. Please do not come inside more than 20 minutes before your booking's start time. As there are several games with staggered start times, there may be nowhere for you to wait. Instead, if you arrive early, call and see if you can start your game early before coming in."
  },
  {
    question: "My child wants to have their birthday party at Puzzled; can the kids play by themselves?",
    answer: "Children's birthday parties are welcome, however if all players are less than 13, an adult must remain on site. The kids are able to play the game(s) by themselves, and are given extra hints and clues to help them be successful. Guardians are responsible for any damage to games that is the result of unattended children's behaviour."
  }
];

interface FAQsProps {
  navigateTo: (view: 'home' | 'faq', targetId?: string) => void;
}

export default function FAQs({ navigateTo }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-darker relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back Button */}
        <div className="mb-12">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>

        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-black uppercase mb-4"
          >
            GOT <span className="text-primary">QUESTIONS?</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg">Everything you need to know before getting puzzled.</p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-dark-card border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? 'border-primary' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-white hover:text-primary transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3 text-lg">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-primary' : 'text-zinc-500'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-zinc-400 text-sm leading-relaxed border-t border-white/5 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
