import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Parties from './components/Parties';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-darker">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Parties />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
