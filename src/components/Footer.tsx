import { Puzzle, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="location" className="bg-black border-t border-white/10">
      
      {/* Bottom Info Strip - Vibrant Theme */}
      <div className="bg-zinc-950 px-6 md:px-12 py-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Location</span>
            <span className="text-sm font-bold">123 Barrydowne Rd, Sudbury</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Availability</span>
            <span className="text-sm font-bold text-green-400 italic">Games Open Now</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Call Us</span>
            <span className="text-sm font-bold text-primary">705-555-0123</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs hover:border-primary hover:text-primary transition-all">IG</a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs hover:border-primary hover:text-primary transition-all">FB</a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs hover:border-primary hover:text-primary transition-all">TW</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Puzzle className="w-5 h-5 text-black" />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-white">
                PUZZLED<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Sudbury's premier escape room experience. Immersive storytelling, challenging puzzles, and unforgettable memories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-black text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Our Rooms', 'Book Online', 'Parties & Events', 'FAQ', 'Gift Cards'].map(link => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-black text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">
                  123 Escape Avenue<br />
                  Sudbury, ON P3E 1A1<br />
                  Canada
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-zinc-400 text-sm">(705) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-zinc-400 text-sm">info@puzzledescape.ca</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-black text-white mb-6 uppercase tracking-wider text-sm">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Mon - Wed</span>
                <span className="text-white">Closed</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Thursday</span>
                <span className="text-white">4PM - 10PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Friday</span>
                <span className="text-white">2PM - 11PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Saturday</span>
                <span className="text-white">10AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-zinc-400">Sunday</span>
                <span className="text-white">10AM - 8PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Puzzled Escape Rooms. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-zinc-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-300 text-sm transition-colors">Waiver</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
