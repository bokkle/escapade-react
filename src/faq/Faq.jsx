import { useState } from 'react';
import Accordion from './Accordion';
import {
  generalInfo,
  prohibitedInfo,
  ticketingInfo,
  supportInfo,
} from '../constants/constants';
import FaqSelect from './FaqSelect';

function Faq() {
  const [faqSection, setFaqSection] = useState('general');

  const handleSetFaq = (e) => {
    console.log(e);
    setFaqSection(e.target.value);
  };

  return (
    <div className="flex flex-1 justify-center p-5">
      <div className="flex w-full flex-col items-center justify-start gap-2.5">
        <h1 className="text-center capitalize">frequently asked questions</h1>

        <FaqSelect faqSection={faqSection} onHandleSetFaq={handleSetFaq} />

        {faqSection === 'general' &&
          generalInfo.map((item) => (
            <Accordion
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        {faqSection === 'prohibited' &&
          prohibitedInfo.map((item) => (
            <Accordion
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        {faqSection === 'ticketing' &&
          ticketingInfo.map((item) => (
            <Accordion
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        {faqSection === 'support' &&
          supportInfo.map((item) => (
            <Accordion
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
      </div>
    </div>
  );
}

export default Faq;
