import BtnWhatsApp from './BtnWhatsApp';
import { Link } from 'react-scroll';
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
            Más de 10 años de experiencia creando trabajos de herrería
            resistentes y de calidad. <br /> Diseñamos y fabricamos soluciones
            duraderas, hechas a medida. <br />
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
