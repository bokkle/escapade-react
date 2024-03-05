import { Link } from 'react-router-dom';

function NavListItem({ children }) {
  return (
    <Link to={`${children.replaceAll(' ', '')}`}>
      <li
        className="cursor-pointer  text-lg font-semibold uppercase text-teal-400
      transition-all duration-100 hover:text-teal-200 active:scale-95"
      >
        {children}
      </li>
    </Link>
  );
}

export default NavListItem;
