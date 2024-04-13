import Stars from './Stars';
import HeroModel from './HeroModel';
import HeroTitle from './HeroTitle';
// import TicketInfo from '../cart/TicketInfo';
import About from './About';
// :)

function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-between">
      <Stars />
      <HeroTitle />
      <HeroModel />
      <About />
    </div>
  );
}

export default HomePage;
