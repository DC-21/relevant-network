import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { colors } from "../constants/colors";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav
      className={`flex items-center max-w-7xl font-bold shadow-lg border-b top-0 z-50  backdrop-blur w-full justify-between px-2 md:px-6 py-7`}
    >
      <Link to={"/"} className="font-bold flex items-center gap-2 group">
       <img src={logo} alt="logo" className="md:h-8 h-6 object-cover group-hover:rotate-45 duration-100" />
       <span style={{color:colors.orange}} className=" group-hover:text-gray-600">RELEVANT NETWORK</span>
      </Link>
      <li className="list-none gap-4 md:flex hidden">
        <Link to={"/"} className=" hover:text-[#ff6600] text-gray-700 duration-200">HOME</Link>
        <Link to={"/"} className=" hover:text-[#ff6600] text-gray-700 duration-200">ABOUT</Link>
        <Link to={"/"} className=" hover:text-[#ff6600] text-gray-700 duration-200">SERVICES</Link>
        <Link to={"/"} className=" hover:text-[#ff6600] text-gray-700 duration-200">BLOG</Link>
        <Link to={"/"} className=" hover:text-[#ff6600] text-gray-700 duration-200">CONTACT</Link>
      </li>
      <button
        onClick={() => setOpen(!open)}
        className="flex md:hidden flex-col gap-3"
      >
        <div
          className={`w-8 h-[0.13rem] ${
            open ? "translate-y-[0.44rem] rotate-45" : ""
          } bg-gray-800 duration-300 delay-150`}
        ></div>
        <div
          className={`w-8 h-[0.13rem] ${
            open ? "-translate-y-[0.44rem] -rotate-45" : ""
          } bg-gray-800 duration-300 delay-150`}
        ></div>
      </button>
      <div
        className={`absolute origin-bottom ${
          open ? "left-0" : "-left-full"
        } md:hidden top-[101%] bg-gray-200 border-t-0 max-w-7xl delay-150 duration-300 bg-opacity-[98%] backdrop-blur-md w-full inset-x-0`}
      >
        <div className=" text-2xl flex min-h-screen flex-col h-full w-full gap-4 items-center list-none">
          <div className=" text-center flex flex-col mt-20 gap-2">
            <li>
              <Link to={"/blog"} className=" hover:text-[#ff6600] text-gray-700 duration-200">HOME</Link>
            </li>
            <li>
              <Link to={"/about"} className=" hover:text-[#ff6600] text-gray-700 duration-200">ABOUT</Link>
            </li>
            <li>
              <Link to={"/services"} className=" hover:text-[#ff6600] text-gray-700 duration-200">SERVICES</Link>
            </li>
            <li>
              <Link to={"/services"} className=" hover:text-[#ff6600] text-gray-700 duration-200">BLOG</Link>
            </li>
            <li>
              <Link to={"/services"} className=" hover:text-[#ff6600] text-gray-700 duration-200">CONTACTS</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
