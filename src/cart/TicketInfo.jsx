import {
  faAddressCard,
  faCalendar,
  faClock,
  faLocationDot,
  faUsersRectangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TicketInfo() {
  return (
    <div className="space-y-2">
      <h1 className="font-semibold capitalize tracking-wide text-purple-300">
        weekend general admission
      </h1>
      <div className="flex space-x-2">
        <div className="flex w-min flex-col justify-center space-y-2">
          <FontAwesomeIcon
            icon={faAddressCard}
            className="text-xl text-cyan-300"
          />
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-xl text-cyan-300"
          />
          <FontAwesomeIcon
            icon={faCalendar}
            className="text-xl text-cyan-300"
          />
          <FontAwesomeIcon icon={faClock} className="text-xl text-cyan-300" />

          <FontAwesomeIcon icon={faUsersRectangle} className="text-cyan-300" />
        </div>
        <div className="flex flex-col justify-center space-y-1">
          <p className="capitalize text-slate-300">aged 16+ only</p>
          <p className="capitalize text-slate-300">lanesdown park, ottawa</p>
          <p className="capitalize text-slate-200">june 21-23 2024</p>
          <p className="capitalize text-slate-200">
            fri 3:00pm, sat/sun 1:00pm
          </p>
          <p className="text-slate-200">22,000 people</p>
        </div>
      </div>
    </div>
  );
}

export default TicketInfo;
