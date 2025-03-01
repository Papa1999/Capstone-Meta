import logo from "../icons_assets/Logo.svg";
const Header = () => {
  return (
    <header className="flex justify-between items-center w-10/12 mx-auto">
      <img src={logo} alt="logo" className="bg-black" />
      <nav>
        <ul className="flex gap-4">
          <li className="font-semibold">
            <a href="#hero">Home</a>
          </li>
          <li className="font-semibold">
            <a href="#testimonials">About</a>
          </li>
          <li className="font-semibold">
            <a href="#menu">Menu</a>
          </li>
          <li className="font-semibold">
            <a href="#reservation">Reservations</a>
          </li>
          <li className="font-semibold">
            <a href="#reservation">Order Online</a>
          </li>
          <li className="font-semibold">
            <a href="#reservation">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
