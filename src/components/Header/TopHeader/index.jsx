import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/Logo.svg";
import { GrCart } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { navItems } from "../../../constant/home.constant";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const TopHeader = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <div
      className="p-5 lg:py-10  flex flex-col lg:flex-row justify-between gap-5 lg:gap-20 
     border-red-500 items-center font-josefin container lg:px-5 mx-auto "
    >
      <div className="w-full  ">
        <p className="pb-1 lg:p-5 border-b lg:border t  border-cream font-light lg:font-normal  text-sm text-center lg:inline text-white">
          Call - 987 654 321
        </p>
      </div>
      <div className="w-full  flex flex-row justify-between items-center ">
        <img src={logo} className=" w-32 lg:w-[350px]" />
        {/* Mobile Menu Button */}
        <button
          onClick={() => setHamburgerMenu(!hamburgerMenu)}
          className="lg:hidden"
        >
          <CiMenuFries className="text-4xl font-bold text-white" />
        </button>
        {/* Mobile Menu Items */}
        {hamburgerMenu && (
          <div className="">
            <div
              onClick={() => setHamburgerMenu(!hamburgerMenu)}
              className="bg-dark/90 fixed inset-y-0 inset-x-0 z-0"
            ></div>
            <div className="bg-slate-500 flex flex-col justify-between  fixed inset-y-0 w-10/12 left-0 z-40">
              {/* Top */}
              <div className="  flex flex-col ">
                {navItems.map((item) => (
                  <NavLink
                    className={
                      " text-lg text-white border-b border-cream last:border-b-0  py-5 px-8 hover:bg-cream font-josefin"
                    }
                    key={item.id}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
              {/* Bottom */}
              <div className="flex flex-row justify-evenly pb-5 items-center gap-5 ">
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
        )}
      </div>
      <div
        className="w-full  flex flex-row-reverse lg:flex-row items-center justify-start  lg:justify-end gap-5
       lg:gap-10"
      >
        <div className="text-white text-2xl lg:text-3xl ">
          <GrCart />
        </div>
        <Link
          to={"/reservation"}
          className="bg-cream py-2 text-sm lg:py-5 px-8 lg:px-14 lg:text-xl font-medium  text-dark"
        >
          Reservation
        </Link>
      </div>
    </div>
  );
};
export default TopHeader;
