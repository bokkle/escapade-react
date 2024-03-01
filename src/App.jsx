import Footer from './footer/Footer';
import NavBar from './nav/NavBar';
import Tickets from './tickets/Tickets';
import Hero from './hero/Hero';

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <NavBar />
      <Hero />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;
