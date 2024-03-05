import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from './NavList';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';

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
    <div>
      <NavList />
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
