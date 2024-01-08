import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center max-w-7xl fixed font-bold text-white md:mt-2 mt-0 bg-[#5355e0] top-0 z-50 bg-opacity-[98%] backdrop-blur w-full justify-between px-2 md:px-6 py-7">
      <Link to={"/"} className="md:text-[20px] xl font-bold">
        RELEVANT NETWORK
      </Link>
      <li className="list-none gap-4 md:flex hidden">
        <Link to={"/"}>HOME</Link>
        <Link to={"/"}>ABOUT</Link>
        <Link to={"/"}>SERVICES</Link>
        <Link to={"/"}>BLOG</Link>
        <Link to={"/"}>CONTACT</Link>
      </li>
      <button
        onClick={() => setOpen(!open)}
        className="flex md:hidden flex-col gap-3"
      >
        <div
          className={`w-8 h-[0.13rem] ${
            open ? "translate-y-[0.44rem] rotate-45" : ""
          } bg-white duration-300 delay-150`}
        ></div>
        <div
          className={`w-8 h-[0.13rem] ${
            open ? "-translate-y-[0.44rem] -rotate-45" : ""
          } bg-white duration-300 delay-150`}
        ></div>
      </button>
    </nav>
  );
};

export default NavBar;
