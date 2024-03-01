function NavListItem({ children }) {
  return (
    <li
      className="text-lg  font-semibold uppercase text-teal-400 cursor-pointer
      hover:text-teal-200 active:scale-95 transition-all duration-100"
    >
      {children}
    </li>
  );
}

export default NavListItem;
