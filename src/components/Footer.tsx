import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to={"/"}>
          <img src={logo} loading="lazy" alt="logo" />
        </Link>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
