import { useState } from 'react';
import Accordion from './Accordion';

function Faq() {
  const [isOpen, setIsOpen] = useState(false);

  const generalInfo = [
    {
      title: 'When is EMF 2024?',
      content:
        'The festival will be taking place over the weekend of Friday June 21st, Saturday June 22nd and Sunday June 23rd, 2024.',
    },
    {
      title: 'Where is the festival taking place?',
      content:
        'The Escapade Music Festival will be taking place at Lansdowne Park in Ottawa.',
    },
    {
      title: 'What is the age requirement to attend?',
      content: 'General admission is 16+ and VIP admission is 19+.',
    },
    {
      title:
        'How do you plan to verify the ages of those attending the festival?',
      content: `Every attendee of the festival is required to present two official forms of photo ID, each displaying their date of birth (such as a driver's license, health insurance card, passport, or a student ID with photo and date of birth), issued by a governmental authority.`,
    },
    {
      title: 'Am I able to exit and re-enter the festival grounds at any time?',
      content: `No, once you exit the festival grounds, you cannot be re-admitted.`,
    },
    {
      title: 'Will there be security at the festival?',
      content: `Yes, security personnel will be stationed across the festival grounds and will be readily available to assist at any time, should the need arise.`,
    },
    {
      title: 'Will I be able to buy food on site?',
      content: `Yes, you will be able to purchase food on site, as we will have a variety of food vendors available to cater to different dietary preferences and needs.`,
    },
    {
      title: 'What happens if it rains?',
      content: `Rain 🌧 or shine ☀️ , the show must go on!`,
    },
    {
      title: 'Will a medical team be available on-site during the event?',
      content: `Absolutely, the health and safety of our attendees is our priority. A multitude of medical tents and roving medical teams will be present at all times.`,
    },
    {
      title: `What's the EMF 2024 code of conduct?`,
      content: `Patron Code of Conduct 

      At Escapade Music Festival, great events are the heart of what we do. An important part of any great event is ensuring a safe, respectful, and inclusive environment for our guests, artists and staff to experience. 
      
      We are committed to creating a safe, comfortable, and enjoyable experience for everyone. We ask that your conduct contribute to everyone’s enjoyment of the event, be legally appropriate, and not be offensive or abusive to others. For your safety and comfort, unacceptable conduct is subject to ejection and includes, but is not limited to, the following: 
      
      • Use of foul, threatening, offensive or abusive language or gestures. 
      
      • Discrimination, bullying or hate that harasses, victimizes, degrades, or intimidates an individual or group of individuals on the basis of religion, race, national origin, ethnicity, sexual orientation, gender, age, ability, physical appearance or other. 
      
      • Harassment, including unwelcome or hostile behavior, physical contact or sexual attention. 
      
      • Fighting or any other type of violence. 
      
      • Wearing or using clothing, signs, and banners which are offensive in nature. 
      
      • Intoxication or impairment due to alcohol/cannabis or consumption of illegal substances. 
      
      • Throwing objects or interfering with the progress of the event. 
      
      • Being in possession of alcohol not purchased inside the festival 
      
      • Being a minor in possession of alcohol or providing a minor with alcohol. 
      
      • Being in possession of weapons, illegal substances or any other prohibited items. 
      
      • Smoking (including e-cigarettes, personal vapourizers, and cannabis) inside the venue. 
      
      • Unpermitted access and breaching perimeters to the festival VIP areas or other restricted areas. 
      
      • Any other conduct that may be deemed by Escapade Music Festival to be inappropriate or which may adversely affect the safety of persons or property, or disruption of the event. 
      
      Escapade Music Festival will not tolerate any unsafe, offensive behaviour that violates of Fan Code of Conduct. Failure to abide by this Code may result in ejection, suspension from entering any or all of our festivals. 
      
      Each of us has a responsibility to report any act that goes against the values that we stand for. So, if you see something, say something. Report any safety concerns to our management team right away. `,
    },
    {
      title: 'Additional general information',
      content: `• All ticket sales are final (non-refundable and cannot be exchanged.)

      • The event's schedule and performances are subject to change without prior notice.

      • The Escapade Music Festival will not be responsible for any personal items that are lost, stolen, or damaged. It's best to avoid bringing valuables to the festival.`,
    },
  ];

  return (
    <div className="flex flex-1 justify-center border p-5 text-slate-200">
      <div className="flex w-full flex-col items-center justify-start border">
        <h1 className="text-center capitalize">frequently asked questions</h1>
        <select
          className="max-w-xs rounded border border-teal-400 bg-slate-800 p-2 
        text-center font-semibold capitalize tracking-wide text-slate-300"
          name="faq"
          id=""
        >
          <option value="">general information</option>
          <option value="">allowed & prohibited items</option>
          <option value="">ticketing & line up</option>
          <option value="">support & help</option>
        </select>

        {generalInfo.map((item, i) => (
          <Accordion
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
        {/* <p className="text-l font-semibold tracking-wide">
            When is EMF 2024?
          </p>
          <FontAwesomeIcon icon={faCaretDown} className="text-xl" />
          <p className="">
            The festival will be taking place over the weekend of Friday June
            21st, Saturday June 22nd and Sunday June 23rd, 2024.
          </p> */}
      </div>
    </div>
  );
}

export default Faq;
