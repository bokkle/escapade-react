import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex w-full max-w-3xl cursor-pointer flex-col rounded-lg 
          border ${!isOpen ? 'border-teal-300' : 'border-purple-400'} bg-slate-800 px-4 py-2`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full items-center justify-between">
        <p
          className={`text-l mr-2 font-semibold tracking-wide 
          ${!isOpen ? 'text-slate-200' : 'text-purple-400'}`}
        >
          {title}
        </p>
        {!isOpen ? (
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-xl text-slate-200"
          />
        ) : (
          <FontAwesomeIcon
            icon={faCaretUp}
            className="text-xl text-purple-400"
          />
        )}
      </div>
      {isOpen && (
        <div className="w-full">
          <p className="whitespace-pre-line p-2 text-slate-200">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
