
import style from "../../../styles/main_presentation.module.css";
import CustomLink from "../../../reusable/CustomLink";
import { whatsApp } from "../../../assets/Icons";
const BtnWhatsApp = () => {
  return (
    <CustomLink href="https://wa.link/ikdtw0" target="_blank" rel="noopener noreferrer">
      <img
        src={whatsApp}
        alt="wsp"
        className={style.image_wsp}
        height={45}
        width={45}
      />
    </CustomLink>
  );
};

export default BtnWhatsApp;
