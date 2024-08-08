import logoTextDark from "../assets/logo-text-dark.png";
import menuIcon from "../assets/menu-icon.svg";

function Navbar() {
  return (
    <div className="w-full flex justify-between px-12 py-12">
      <img
        src={logoTextDark}
        width={207}
        height={40}
        className=" cursor-pointer"
        alt="logo"
      />

      <img
        src={menuIcon}
        width={70}
        height={14}
        alt=" menu-icon"
        className="cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
