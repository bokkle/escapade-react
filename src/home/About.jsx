// import VoltageButton from '../ui/VoltageButton';
import { Tilt } from 'react-tilt';
import TicketInfo from '../cart/TicketInfo';
import VoltageButton from '../ui/VoltageButton';
// import { motion } from 'framer-motion';

const AboutCard = ({ index }) => {
  return (
    <Tilt
      className="h-80 w-80 rounded-xl bg-gradient-to-br from-indigo-500 via-cyan-300 to-pink-300 
    p-2 lg:h-80 lg:w-80"
    >
      <div className="flex h-full items-center justify-center rounded-lg bg-slate-900 p-2">
        {index === 1 ? <TicketInfo /> : null}
        {index === 2 ? (
          <div className="flex h-full w-full flex-col items-center justify-around border py-2">
            <h1 className="text-center text-2xl font-semibold uppercase tracking-wide text-purple-300">
              tickets on sale <span className="text-cyan-300">now</span>
            </h1>{' '}
            <VoltageButton>buy now</VoltageButton>
          </div>
        ) : null}
      </div>
    </Tilt>
  );
};

function About() {
  return (
    <div className="flex w-full flex-row flex-wrap justify-center gap-8 border px-2 py-8">
      <AboutCard index={1} />
      <AboutCard index={2} />
      <AboutCard index={3} />
    </div>
  );
}

export default About;
