import HeroModel from './HeroModel';
import HeroTitle from './HeroTitle';

function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-between">
      <HeroTitle />
      <HeroModel />
      <h2 className="text-center text-2xl text-teal-500">June 21-23 2024</h2>
    </div>
  );
}

export default HomePage;
