import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from './NavList';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import { NavLink } from 'react-router-dom';

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen === true)
      document.body.classList.toggle('overflow-hidden', isOpen);
    else document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-6 border">
      <NavList />
      <NavLink to='/cart'>
        <FontAwesomeIcon
          icon={faBagShopping}
          className="cursor-pointer text-xl text-teal-400
      hover:text-teal-200"
        />
      </NavLink>
      <FontAwesomeIcon
        icon={faBars}
        className="text-2xl text-teal-400 md:hidden"
        onClick={toggleOpen}
      />
      {isOpen && <MobileNav isOpen={isOpen} onToggleOpen={toggleOpen} />}
    </div>
  );
}

export default NavMenu;
