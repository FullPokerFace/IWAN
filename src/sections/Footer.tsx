import Section from "../components/Section/Section";

const Footer = () => {
  return (
    <Section className="justify-center flex">
      IWAN © {new Date().getFullYear()}
    </Section>
  );
};

export default Footer;
