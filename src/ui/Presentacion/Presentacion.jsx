import BtnWhatsApp from './BtnWhatsApp';
import { Link } from 'react-scroll';
import './presentacion.css';

const Presentacion = () => {
  return (
    <>
      <BtnWhatsApp />
      <main className="container_presentation">
        <section className="aboutHerreria">
          <h1 className="welcome_title titles">
           Herrería a medida, durable y funcional
          </h1>
          <p className="subtitle">
          Fabricamos portones, rejas y estructuras adaptadas a cada proyecto.
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
