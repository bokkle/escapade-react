import { useEffect, useState } from 'react';
import NavList from './NavList';
import NavLogo from './NavLogo';
import NavMobile from './NavMobile';

function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="mx-auto flex justify-center bg-indigo-950 px-4 py-4 text-3xl">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <NavLogo />
        {width > 640 ? <NavList /> : <NavMobile />}
      </div>
    </nav>
  );
}

export default NavBar;
