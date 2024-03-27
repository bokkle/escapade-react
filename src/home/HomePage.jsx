import Stars from './Stars';
import HeroModel from './HeroModel';
import HeroTitle from './HeroTitle';
import VoltageButton from '../ui/VoltageButton';

function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-between">
      <Stars />
      <HeroTitle />
      <HeroModel />
      <div className='border p-2'>
        <h2 className="text-center text-2xl text-teal-500">June 21-23 2024</h2>
        <h2 className="mb-2 text-2xl uppercase text-cyan-300">
          tickets on sale <span className="text-purple-400">now</span>
        </h2>
        <div className="mb-5 p-2">
          <VoltageButton>get tickets</VoltageButton>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
