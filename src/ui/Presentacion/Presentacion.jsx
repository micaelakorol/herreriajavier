import BtnWhatsApp from './BtnWhatsApp';
import './presentacion.css';
import CustomLink from '../../reusable/CustomLink';

const Presentacion = () => {
  return (
    <>
      <BtnWhatsApp />
      <main className="container_presentation">
        <section className="aboutHerreria">
          <h1>
            Soluciones en herrería para tu <br /> hogar, negocio o proyecto.
          </h1>
          <p className="subtitle">Portones, rejas y estructuras a medida.</p>
          <p className="subtitle">Presupuesto directo y sin compromiso.</p>

          <CustomLink
            href="https://wa.me/5492215404185"
            className="btn_navigation cta"
          >
            Pedir presupuesto
          </CustomLink>
        </section>
      </main>
    </>
  );
};

export default Presentacion;
