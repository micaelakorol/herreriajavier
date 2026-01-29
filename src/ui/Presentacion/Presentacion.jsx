import BtnWhatsApp from './BtnWhatsApp';
import { Link } from 'react-scroll';
import './presentacion.css';

const Presentacion = () => {
  return (
    <>
      <BtnWhatsApp />
      <main className="container_presentation">
        <section className="aboutHerreria">
          <h1>
            Soluciones en herrería para tu <br /> hogar, negocio o proyecto.
          </h1>
          <p className="subtitle">
            Fabricamos portones, rejas, barandas y estructuras <br /> pensadas
            para cada necesidad.
          </p>
          <p className="subtitle">
            Más de 10 años creando trabajos duraderos.
          </p>

          <Link activeClass="active" to="jobs" className="btn_work">
            Trabajos realizados
          </Link>
        </section>
      </main>
    </>
  );
};

export default Presentacion;
