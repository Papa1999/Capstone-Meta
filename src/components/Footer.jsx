import footerImg from "../icons_assets/restaurant.jpg";
const Footer = () => {
  return (
    <footer className="w-full mx-auto flex justify-around py-10  px-[10%] bg-[#495E57]">
      <figure className="w-1/3">
        <img src={footerImg} alt="footer img" className="w-[75%]" />
      </figure>
      <div role="group" className="flex w-2/3 justify-between">
        <article>
          <h3 className="font-bold font-serif tracking-wider">
            Doormat Navigation
          </h3>
          <ul>
            <li>
              <a href="/" className="text-sm font-normal">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                Menu
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                Reservations
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                Order Online
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                Login
              </a>
            </li>
          </ul>
        </article>
        <article>
          <h3 className="font-bold font-serif tracking-wider">Contact</h3>
          <ul>
            <li>
              <a href="/" className="text-sm font-normal">
                Adress
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                Phone Number
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                Email
              </a>
            </li>
          </ul>
        </article>
        <article>
          <h3 className="font-bold font-serif tracking-wider">
            Social Media Links
          </h3>
          <ul>
            <li>
              <a href="/" className="text-sm font-normal">
                Adress
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                Phone Number
              </a>
            </li>
            <li>
              <a href="/" className="text-sm font-normal">
                Email
              </a>
            </li>
          </ul>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
