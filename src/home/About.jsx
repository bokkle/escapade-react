// import VoltageButton from '../ui/VoltageButton';
import Tilt from 'react-tilt';
// import { motion } from 'framer-motion';

const AboutCard = ({ index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full rounded-lg p-1 border"></div>
    </Tilt>
  );
};

function About() {
  return (
    <div className="border">
      <AboutCard index={1} />
      <AboutCard index={2} />
      <AboutCard index={3} />
    </div>
  );
}

export default About;
