import NavListItem from './NavListItem';

function NavList() {
  const navItems = ['line up', 'tickets', 'faq', 'contact','cart'];
  return (
    <ul className="hidden space-x-8 md:flex">
      {navItems.map((el, i) => (
        <NavListItem key={i}>{el}</NavListItem>
      ))}
    </ul>
  );
}

export default NavList;
