import logo from "../icons_assets/Logo.svg";
const Header = () => {
  return (
    <header className="flex justify-between items-center w-10/12 mx-auto">
      <img src={logo} alt="logo" className="bg-black" />
      <nav>
        <ul className="flex gap-4">
          <li className="font-semibold">Home</li>
          <li className="font-semibold">About</li>
          <li className="font-semibold">Menu</li>
          <li className="font-semibold">Reservetions</li>
          <li className="font-semibold">Order Online</li>
          <li className="font-semibold">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
