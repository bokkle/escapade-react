import NavLogo from './NavLogo';
import NavMenu from './NavMenu';

function NavBar() {
  return (
    <div
      className="mb-8 flex items-center justify-between border-b 
    border-slate-700 bg-slate-900 p-5"
    >
      <NavLogo />
      <NavMenu />
    </div>
  );
}

export default NavBar;
