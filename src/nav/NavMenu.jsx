import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from './NavList';

function NavMenu() {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} className="text-2xl text-teal-400 md:hidden" />
      <NavList />
    </div>
  );
}

export default NavMenu;
