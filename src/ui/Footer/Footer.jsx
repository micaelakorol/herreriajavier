import "./footer.css";
import PaymentMethod from "./elements/PaymentMethod";
import Phones from "./elements/Phones";
import Social from "./elements/Social";

const footerSections = [
  PaymentMethod,
  Phones,
  Social,
];

const Footer = () => {
  return (
    <footer className="container_footer">
      {footerSections.map((Section, index) => (
        <div className="section_footer" key={index}>
          <Section />
        </div>
      ))}
    </footer>
  );
};

export default Footer;
