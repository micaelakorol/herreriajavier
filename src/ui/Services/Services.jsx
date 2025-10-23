
import style from "../../styles/services.module.css";
import Cards from "./Cards";
import { Element } from "react-scroll";
const Services = () => {
  return (
    <Element name="services">
      <h2 className={style.title_service}> Nuestros servicios </h2>
      <Cards />
    </Element>
  );
};

export default Services;
