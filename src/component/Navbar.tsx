import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center max-w-7xl fixed font-bold text-white md:mt-2 mt-0 rounded bg-[#5355e0] top-0 z-50 bg-opacity-[98%] backdrop-blur w-full justify-between px-2 md:px-6 py-7">
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
      <div
        className={`absolute origin-bottom ${
          open ? "scale-y-100" : "scale-y-0"
        } md:hidden top-[101%] bg-[#5658e0] max-w-7xl delay-150 duration-300 bg-opacity-[98%] backdrop-blur-md w-full inset-x-0`}
      >
        <div className=" text-2xl flex min-h-screen flex-col h-full w-full gap-4 items-center list-none">
          <div className=" text-center flex flex-col mt-20 gap-2">
            <li>
              <Link to={"/blog"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/services"}>SERVICES</Link>
            </li>
            <li>
              <Link to={"/services"}>BLOG</Link>
            </li>
            <li>
              <Link to={"/services"}>CONTACTS</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
