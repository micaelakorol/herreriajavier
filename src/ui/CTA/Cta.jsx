import '../Servicios/tarjeta.css';
import './cta.css';
import '../Nav/navegacion.css';
import CustomLink from '../../reusable/CustomLink';
const Cta = () => {
  return (
    <section className="container_cta">
      <h3 className="title-uppercase">- Hacé tu consulta ahora</h3>
      <h4>Contanos que necesitas</h4>
      <p>Presupuesto rápido, directo con el herrero y sin compromiso.</p>
      <CustomLink
        href="https://wa.me/5492215404185"
        className="btn_navigation cta"
      >
        Hablar por WhatsApp
      </CustomLink>
    </section>
  );
};

export default Cta;
