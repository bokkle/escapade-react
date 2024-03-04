import Footer from './footer/Footer';
import NavBar from './nav/NavBar';
import Tickets from './tickets/Tickets';
import Hero from './hero/Hero';
import Lineup from './lineup/Lineup';
import Faq from './faq/Faq';
import Contact from './contact/Contact';
import Loader from './ui/Spinner';
// import { Loader } from '@react-three/drei';


function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between">
      <NavBar />
      {/* <Hero /> */}
      {/* <Lineup /> */}
      {/* <Tickets /> */}
      {/* <Faq /> */}
      <Contact />
      {/* <Loader /> */}
      <Footer />
    </div>
  );
}

export default App;
