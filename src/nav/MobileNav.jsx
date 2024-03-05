import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function MobileNav({ isOpen, onToggleOpen }) {
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-slate-900 p-4">
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-0 top-0 m-10 text-4xl text-slate-200"
            onClick={onToggleOpen}
          />
          <ul
            className="flex h-5/6 flex-col items-center justify-around 
      py-20 text-4xl uppercase text-teal-400"
          >
            <NavLink onClick={onToggleOpen} to="/lineup">
              line up
            </NavLink>
            <NavLink onClick={onToggleOpen} to="/tickets">
              tickets
            </NavLink>
            <NavLink onClick={onToggleOpen} to="/faq">
              faq
            </NavLink>
            <NavLink onClick={onToggleOpen} to="/contact">
              contact
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
