import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" flex flex-col w-full px-4 md:px-12">
      <div className=" flex md:flex-row justify-between flex-col items-center">
        <Link to={"/"}>
          <img src={logo} loading="lazy" alt="logo" className=" h-12"/>
        </Link>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
