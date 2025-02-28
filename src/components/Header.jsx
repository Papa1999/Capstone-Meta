import logo from "../icons_assets/Logo.svg"
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="bg-black" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservetions</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
