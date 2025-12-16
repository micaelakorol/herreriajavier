
import { whatsApp } from "../../assets/Icons";
import CustomLink from "../../reusable/CustomLink";
import "./presentacion.css";
const BtnWhatsApp = () => {
  return (
    <CustomLink href="https://wa.link/ikdtw0" target="_blank" rel="noopener noreferrer">
      <img
        src={whatsApp}
        alt="wsp"
        className="image_wsp"
        height={45}
        width={45}
      />
    </CustomLink>
  );
};

export default BtnWhatsApp;
