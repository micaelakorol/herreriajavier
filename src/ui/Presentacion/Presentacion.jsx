import BtnWhatsApp from './BtnWhatsApp';
import './presentacion.css';
import CustomLink from '../../reusable/CustomLink';

const Presentacion = () => {
  return (
    <>
      <BtnWhatsApp />
      <main className="container_presentation">
        <section className="aboutHerreria">
          <h1 className="principal_title">
            Soluciones en herrería para tu <br /> hogar, negocio o proyecto.
          </h1>
          <p className="subtitle">
            Portones, rejas, estructuras a medida y más. <br /> Presupuesto directo y
            sin compromiso.
          </p>

          <CustomLink
            href="https://wa.me/5492215404185"
            className="btn_navigation cta"
          >
            Hacer una consulta
          </CustomLink>
        </section>
      </main>
    </>
  );
};

export default Presentacion;
