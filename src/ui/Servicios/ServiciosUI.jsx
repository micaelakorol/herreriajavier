
import './tarjeta.css'
import Tarjeta from "./Tarjeta";
import { Element } from "react-scroll";
const ServiciosUI = () => {
  return (
    <Element name="services">
      <h2 className="title_service"> Servicios de herrería a medida </h2>
      <Tarjeta />
    </Element>
  );
};

export default ServiciosUI;
