import { NavLink } from 'react-router-dom';

function NavListItem({ children }) {
  return (
    <NavLink
      to={`${children.replaceAll(' ', '')}`}
      className={({ isActive }) =>
        isActive ? 'text-teal-200' : 'text-teal-400'
      }
    >
      <li
        className="cursor-pointer  text-lg font-semibold uppercase 
      transition-all duration-100 hover:text-teal-200 active:scale-95"
      >
        {children}
      </li>
    </NavLink>
  );
}

export default NavListItem;
