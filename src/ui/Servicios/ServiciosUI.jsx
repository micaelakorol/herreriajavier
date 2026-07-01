
import './tarjeta.css'
import Tarjeta from "./Tarjeta";
import { Element } from "react-scroll";
const ServiciosUI = () => {
  return (
    <Element name="services">
      <h2 className='title-uppercase'> - Que hacemos</h2>
      <h3 className="titles"> Servicios de herrería a medida </h3>
      <Tarjeta />
    </Element>
  );
};

export default ServiciosUI;
