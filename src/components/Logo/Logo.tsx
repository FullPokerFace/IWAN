import { Link } from "react-router-dom";
import logo from "/src/assets/logo-white.svg";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} />
    </Link>
  );
};

export default Logo;
