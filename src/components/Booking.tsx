import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ChevronLeft, Calendar, Users, Info, Clock } from 'lucide-react';
import { ROOMS, TIME_SLOTS } from '../data';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    players: '4'
  });

  const isStep1Valid = selectedRoom !== '';
  const isStep2Valid = selectedDate !== '' && selectedTime !== '';
  const isStep3Valid = formData.name !== '' && formData.email !== '' && formData.phone !== '';

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const submitBooking = (e: FormEvent) => {
    e.preventDefault();
    if (isStep3Valid) {
      handleNext();
      // In a real app, this would send data to the server via API route.
      // e.g. await fetch('/api/bookings', { method: 'POST', body: JSON.stringify({...}) })
    }
  };

  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <section id="booking" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-black uppercase mb-4"
          >
            SECURE YOUR <span className="text-primary">SPOT</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg">Book your escape online. Walk-ins are subject to availability.</p>
        </div>

        {/* Booking Container */}
        <div className="bg-dark-card border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -z-10 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-primary -z-10 -translate-y-1/2 transition-all duration-500 ease-out" 
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
            
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                  step >= s ? 'bg-primary text-black' : 'bg-zinc-800 text-zinc-500'
                }`}
              >
                {s < step || s === 4 && step === 4 ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
            ))}
          </div>

          {/* Steps Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Select Room */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-display font-black text-white mb-6 uppercase">Select a Mission</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ROOMS.map(room => (
                      <div 
                        key={room.id}
                        onClick={() => {
                          setSelectedRoom(room.id);
                          const currentPlayers = parseInt(formData.players) || 4;
                          if (currentPlayers < room.minPlayers) {
                            setFormData(prev => ({ ...prev, players: String(room.minPlayers) }));
                          } else if (currentPlayers > room.maxPlayers) {
                            setFormData(prev => ({ ...prev, players: String(room.maxPlayers) }));
                          }
                        }}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          selectedRoom === room.id 
                            ? 'border-primary bg-primary/10' 
                            : 'border-white/5 bg-black hover:border-white/20'
                        }`}
                      >
                        <img src={room.image} alt={room.title} className="w-full h-32 object-cover rounded-xl mb-4 opacity-80" />
                        <h4 className="font-bold text-white mb-1">{room.title}</h4>
                        <p className="text-xs text-zinc-400">{room.durationMins} mins | {room.minPlayers}-{room.maxPlayers} players</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Date & Time */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-display font-black text-white mb-6 uppercase">Date & Time</h3>
                  <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* Date Picker */}
                    <div>
                      <label className="flex items-center gap-2 text-zinc-400 font-medium mb-3">
                        <Calendar className="w-4 h-4" /> Select Date
                      </label>
                      <input 
                        type="date" 
                        min={getTodayDateString()}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors color-scheme-dark"
                      />
                    </div>

                    {/* Time Slots */}
                    <div>
                      <label className="flex items-center gap-2 text-zinc-400 font-medium mb-3">
                        <Clock className="w-4 h-4" /> Available Slots
                      </label>
                      {!selectedDate ? (
                        <div className="p-4 bg-black/50 border border-white/5 rounded-xl text-zinc-500 text-sm text-center">
                          Please select a date first
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                          {TIME_SLOTS.map(time => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`py-3 rounded-xl border font-medium text-sm transition-all ${
                                selectedTime === time 
                                  ? 'border-primary bg-primary text-black' 
                                  : 'border-white/10 bg-black text-white hover:border-white/30'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Details */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-display font-black text-white mb-6 uppercase">Your Details</h3>
                  <form id="booking-form" onSubmit={submitBooking} className="grid md:grid-cols-2 gap-6">
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-zinc-400 text-sm font-medium mb-2">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-400 text-sm font-medium mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-400 text-sm font-medium mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-zinc-400 text-sm font-medium mb-2">Number of Players</label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                          <select 
                            value={formData.players}
                            onChange={(e) => setFormData({...formData, players: e.target.value})}
                            className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary appearance-none cursor-pointer"
                          >
                            {(() => {
                              const room = ROOMS.find(r => r.id === selectedRoom);
                              const min = room?.minPlayers || 1;
                              const max = room?.maxPlayers || 8;
                              const options = [];
                              for (let i = min; i <= max; i++) {
                                options.push(i);
                              }
                              return options.map(num => (
                                <option key={num} value={String(num)}>{num} {num === 1 ? 'Player' : 'Players'}</option>
                              ));
                            })()}
                          </select>
                        </div>
                      </div>

                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
                        <h4 className="flex items-center gap-2 text-primary font-bold mb-2">
                          <Info className="w-4 h-4" /> Booking Summary
                        </h4>
                        <ul className="space-y-2 text-sm text-zinc-300">
                          <li><span className="text-zinc-500">Room:</span> {ROOMS.find(r => r.id === selectedRoom)?.title}</li>
                          <li><span className="text-zinc-500">Date:</span> {selectedDate}</li>
                          <li><span className="text-zinc-500">Time:</span> {selectedTime}</li>
                          <li className="pt-2 mt-2 border-t border-white/10 font-bold text-white flex justify-between">
                            <span>Total (Est.)</span>
                            <span>
                              {(() => {
                                const room = ROOMS.find(r => r.id === selectedRoom);
                                if (!room) return '$0.00';
                                if (room.type === 'at-home') return '$40.00';
                                return `$${(parseInt(formData.players) || 0) * 30}.00`;
                              })()}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* STEP 4: Success */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-display font-black uppercase text-white mb-4">Booking Confirmed!</h3>
                  <p className="text-zinc-400 max-w-md mx-auto mb-8">
                    Get ready to be puzzled, {formData.name.split(' ')[0]}! We've sent a confirmation email to <span className="text-white">{formData.email}</span> with all the details you'll need.
                  </p>
                  <button 
                    onClick={() => {
                      setStep(1);
                      setSelectedRoom('');
                      setSelectedDate('');
                      setSelectedTime('');
                      setFormData({name: '', email: '', phone: '', players: '4'});
                    }}
                    className="bg-white hover:bg-zinc-200 text-black px-8 py-3 rounded-full font-black uppercase text-sm transition-colors"
                  >
                    BOOK ANOTHER ROOM
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/10">
              <button 
                onClick={handleBack}
                disabled={step === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-colors ${
                  step === 1 
                    ? 'opacity-0 pointer-events-none' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> BACK
              </button>

              {step < 3 ? (
                <button 
                  onClick={handleNext}
                  disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${
                    ((step === 1 && isStep1Valid) || (step === 2 && isStep2Valid))
                      ? 'bg-primary text-black hover:bg-primary-hover shadow-[0_0_20px_rgba(255,213,0,0.3)]'
                      : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  }`}
                >
                  NEXT STEP <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button 
                  type="submit"
                  form="booking-form"
                  disabled={!isStep3Valid}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${
                    isStep3Valid
                      ? 'bg-primary text-black hover:bg-primary-hover shadow-[0_0_20px_rgba(255,213,0,0.3)]'
                      : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  }`}
                >
                  CONFIRM BOOKING <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

        </div>
      </div>
      
      {/* DatePicker Color Scheme Fix for Dark Mode */}
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
