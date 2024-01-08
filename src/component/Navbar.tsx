import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center max-w-7xl fixed text-white mt-2 bg-[#5355e0] top-0 z-50 bg-opacity-[98%] backdrop-blur w-full justify-between px-2 md:px-6 py-7">
      <Link to={"/"} className="text-2xl">
        RELEVANT NETWORK
      </Link>
      <li className="list-none gap-4 md:flex hidden">
        <Link to={"/"}>HOME</Link>
        <Link to={"/"}>ABOUT</Link>
        <Link to={"/"}>SERVICES</Link>
        <Link to={"/"}>BLOG</Link>
        <Link to={"/"}>CONTACT</Link>
      </li>
      <button>
        <div
          className={`w-8 h-[0.13rem] ${
            open ? "translate-y-[0.44rem] rotate-45" : ""
          } bg-white duration-300 delay-150`}
        ></div>
      </button>
    </nav>
  );
};

export default NavBar;
