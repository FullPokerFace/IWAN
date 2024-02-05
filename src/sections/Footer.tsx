import { Link } from "react-router-dom";
import Section from "../components/Section/Section";

const Footer = () => {
  return (
    <Section className="justify-center flex">
      <div className="flex gap-3">
        <Link to={"/"}>Home</Link>|<Link to={"privacy"}>Privacy policy</Link>|
        <Link to={"terms"}>Terms of use</Link> |
        <span>IWAN © {new Date().getFullYear()}</span>
      </div>
    </Section>
  );
};

export default Footer;
