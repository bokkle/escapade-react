import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Accordion({ title, content }) {
  return (
    <div
      className="flex w-full max-w-3xl items-center justify-between rounded-lg border 
          bg-slate-800 px-4 py-2"
      //   onClick={() => setIsOpen(!isOpen)}
    >
      <p>{title}</p>
      <FontAwesomeIcon icon={faCaretDown} className="text-xl" />
    </div>
  );
}

export default Accordion;
