import Footer from './footer/Footer';
import NavBar from './nav/NavBar';
import Tickets from './tickets/Tickets';
import Hero from './hero/Hero';
import Lineup from './lineup/Lineup';
import Faq from './faq/Faq';

function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between">
      <NavBar />
      {/* <Hero /> */}
      {/* <Lineup /> */}
      {/* <Tickets /> */}
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
