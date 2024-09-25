import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { navItems } from "../../../constant/home.constant";

const Navbar = () => {
  return (
    <div className="bg-dark border-y border-slate-500 hidden md:block">
      <div className="container md:px-5 mx-auto flex flex-row items-center justify-between">
        {/* Left */}
        <div className="  flex flex-row">
          {navItems.map((item) => (
            <NavLink
              className={
                " text-lg text-white py-5 px-8 hover:bg-cream font-josefin"
              }
              key={item.id}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        {/* Right */}
        <div className="flex flex-row items-center gap-5">
          <Link className="text-white text-2xl " to={"#"}>
            <FaInstagram />
          </Link>
          <Link className="text-white text-2xl " to={"#"}>
            <FaFacebook />
          </Link>
          <Link className="text-white text-2xl " to={"#"}>
            <FaTwitter />
          </Link>
          <Link className="text-white text-2xl " to={"#"}>
            <FaPinterest />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
