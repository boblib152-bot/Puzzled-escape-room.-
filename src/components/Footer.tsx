import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import logoImg from '../../assets/logo.png';

interface FooterProps {
  currentView: 'home' | 'faq';
  navigateTo: (view: 'home' | 'faq', targetId?: string) => void;
}

export default function Footer({ currentView, navigateTo }: FooterProps) {
  return (
    <footer id="location" className="bg-black border-t border-white/10">
      
      {/* Bottom Info Strip - Vibrant Theme */}
      <div className="bg-zinc-950 px-6 md:px-12 py-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Location</span>
            <span className="text-sm font-bold">{COMPANY_INFO.address.split(',')[0]}, Sudbury</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Availability</span>
            <span className="text-sm font-bold text-green-400 italic">By Appointment Only</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Call Us</span>
            <span className="text-sm font-bold text-primary">{COMPANY_INFO.phone}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs hover:border-primary hover:text-primary transition-all">IG</a>
          <a href={COMPANY_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs hover:border-primary hover:text-primary transition-all">FB</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <button onClick={() => navigateTo('home')} className="focus:outline-none">
                <img src={logoImg} alt="Puzzled Escape Rooms Logo" className="h-10 w-auto object-contain" />
              </button>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Sudbury's premier escape room experience. Custom designed and built rooms featuring cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={COMPANY_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-black text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Rooms', id: 'rooms' },
                { name: 'Parties & Events', id: 'parties' },
                { name: 'FAQ', id: 'faq' },
                { name: 'Book Online', id: 'booking' }
              ].map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      if (link.id === 'faq') {
                        navigateTo('faq');
                      } else {
                        navigateTo('home', link.id);
                      }
                    }}
                    className="text-zinc-400 hover:text-primary transition-colors text-sm text-left focus:outline-none cursor-pointer"
                  >
                    {link.name}
                  </button>
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
                  2335 Lasalle Blvd<br />
                  Sudbury, ON P3A 2A9<br />
                  Canada
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-zinc-400 text-sm">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-zinc-400 text-sm hover:text-primary transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-black text-white mb-6 uppercase tracking-wider text-sm">Hours</h4>
            <ul className="space-y-3 text-sm">
              {COMPANY_INFO.hours.map((h, i) => (
                <li key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                  <span className="text-zinc-400">{h.days}</span>
                  <span className="text-white">{h.time}</span>
                </li>
              ))}
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
