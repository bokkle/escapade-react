import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareMinus,
  faSquarePlus,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';

function CartQuantity() {
  const [numTickets, setNumTickets] = useState(0);

  console.log(numTickets);

  const handleInc = () => {
    if (numTickets === 6) return;
    setNumTickets((num) => num + 1);
  };

  const handleDec = () => {
    if (numTickets === 0) return;
    setNumTickets((num) => num - 1);
  };

  return (
    <div className="my-6 flex flex-row rounded border border-teal-400 bg-slate-800">
      <div className="flex flex-1 items-center justify-center space-x-2 border py-4">
        <FontAwesomeIcon icon={faTicket} className="text-2xl text-orange-300" />
        <p className="text-lg text-slate-200">
          General x{' '}
          <span className="font-bold text-orange-300">{numTickets}</span>
        </p>
      </div>
      <div className="flex-1">
        <div
          className="flex h-full w-full items-center justify-center 
          space-x-3 border"
        >
          <FontAwesomeIcon
            icon={faSquareMinus}
            className={`cursor-pointer text-2xl 
            ${numTickets === 0 ? 'text-slate-500' : 'text-indigo-400'}`}
            onClick={handleDec}
          />
          <span className="text-xl font-bold text-slate-200">{numTickets}</span>
          <FontAwesomeIcon
            icon={faSquarePlus}
            className={`cursor-pointer text-2xl 
            ${numTickets === 6 ? 'text-slate-500' : 'text-indigo-400'}`}
            onClick={handleInc}
          />
        </div>
      </div>
    </div>
  );
}

export default CartQuantity;
