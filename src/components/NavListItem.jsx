function NavListItem({ children }) {
  return (
    <>
      <li
        className="hover:drop-shadow-glow cursor-pointer tracking-wide 
      transition-all duration-100 hover:text-green-400"
      >
        {children}
      </li>
    </>
  );
}

export default NavListItem;
