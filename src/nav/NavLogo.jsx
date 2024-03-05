import { Link } from 'react-router-dom';

function NavLogo() {
  return (
    <Link to="/">
      <h1
        className="tracking wide cursor-pointer text-3xl font-bold
     lowercase text-teal-400 drop-shadow-none md:text-4xl lg:text-5xl"
      >
        Escapade
      </h1>
    </Link>
  );
}

export default NavLogo;
