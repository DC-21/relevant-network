import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center max-w-7xl fixed text-white mt-2 bg-[#5355e0] top-0 z-50 bg-opacity-[98%] backdrop-blur w-full justify-between px-2 md:px-6 py-7">
      <Link to={"/"} className="text-2xl">
        RELEVANT NETWORK
      </Link>
      <li className="list-none gap-4 flex">
        <Link to={"/"}>HOME</Link>
        <Link to={"/"}>ABOUT</Link>
        <Link to={"/"}>SERVICES</Link>
        <Link to={"/"}>BLOG</Link>
        <Link to={"/"}>CONTACT</Link>
      </li>
    </nav>
  );
};

export default NavBar;
