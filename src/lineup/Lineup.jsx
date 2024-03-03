import { djs, supportDjs } from '../constants/constants';
import VoltageButton from '../ui/VoltageButton';

function Lineup() {
  return (
    <div className="flex h-screen flex-1 flex-col items-center drop-shadow-lg">
      <h1 className="mb-5 text-2xl uppercase tracking-wide text-cyan-300">
        tickets on sale <span className="text-purple-400">now</span>
      </h1>
      <VoltageButton>get tickets</VoltageButton>
      <div
        className="mx-auto my-8 flex max-w-2xl flex-col items-center justify-center 
        uppercase text-cyan-100"
      >
        <p className="border-b-2 border-violet-300">in alphabetical order</p>
        <p className="px-4 text-center text-xl tracking-wide sm:text-2xl">
          {djs.map((dj, i) => `• ${dj} `)}
        </p>
        <p className="mt-3 border-b-2 border-violet-300">stage host</p>
        <p className="mb-3 text-xl sm:text-2xl">shaq's bass all stars</p>
        <p className="border-b-2 border-violet-300">festival support artists</p>
        <p className="px-4 text-center text-lg tracking-wide sm:text-xl">
          {supportDjs.map((dj) => `• ${dj} `)}
        </p>
      </div>
    </div>
  );
}

export default Lineup;
