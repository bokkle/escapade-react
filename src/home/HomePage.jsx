import Stars from './Stars';
import HeroModel from './HeroModel';
import HeroTitle from './HeroTitle';
import VoltageButton from '../ui/VoltageButton';
import TicketInfo from '../cart/TicketInfo';

// :)

function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-between">
      <Stars />
      <HeroTitle />
      <HeroModel />
      <div className="flex flex-col gap-3 tracking-wide drop-shadow-md">
        <div className="mt-2 p-2">
          <h2 className="text-center text-2xl text-pink-300">
            June 21-23 2024
          </h2>
          <h2 className="text-center text-2xl capitalize text-pink-300">
            ottawa, canada
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center px-5 pt-5">
          <h2 className="mb-2 animate-pulse text-3xl uppercase text-cyan-300">
            tickets on sale <span className="text-purple-400">now</span>
          </h2>
          <div className="mb-5 p-2">
            <VoltageButton>get tickets</VoltageButton>
          </div>
        </div>
        <div className="flex flex-col border p-3">
          <p className="text-lg text-teal-200">
            Join the EMF fam! Subscribe to our newsletter.
          </p>
          <input
            type="text"
            placeholder="email"
            className="border border-teal-300 bg-transparent p-2 text-slate-500"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
