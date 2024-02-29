import NavListItem from './NavListItem';

function NavList() {
  return (
    <ul className="flex gap-8 text-lg font-semibold uppercase text-slate-100">
      <NavListItem>line up</NavListItem>
      <NavListItem>tickets</NavListItem>
      <NavListItem>faq</NavListItem>
      <NavListItem>contact us</NavListItem>
    </ul>
  );
}

export default NavList;
