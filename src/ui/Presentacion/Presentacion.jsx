import BtnWhatsApp from "./BtnWhatsApp";
import { Link } from "react-scroll";
import './presentacion.css';

const Presentacion = () => {
  return (
    <>
      <BtnWhatsApp />
      <main className="container_presentation">
        <section className="aboutHerreria">
          <h1 className="welcome_title">
            ¡Te damos la <span>bienvenida!</span>
          </h1>
          <p className="subtitle">
            En Herrería Javier, contamos con más de 10 años de experiencia en el
            rubro. <br />
            Ofrecemos productos de calidad y alta durabilidad.
          </p>
          <Link activeClass="active" to="jobs" className="btn_work">
            Conocé nuestro trabajo
          </Link>
        </section>

        
      </main>
    </>
  );
};

export default Presentacion;
