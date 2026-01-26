import React from 'react';
import '../Servicios/tarjeta.css';
import './cta.css';
import '../Nav/navegacion.css';
import CustomLink from '../../reusable/CustomLink';
const Cta = () => {
  return (
    <section className='container_cta'>
      <h3 className="title_service">Hacé tu consulta ahora</h3>
      <h4 className="">
       Presupuesto rápido y sin compromiso.
      </h4>
      <CustomLink href="tel:2215404185" className="btn_navigation cta">
        Hablar por WhatsApp
      </CustomLink>
    </section>
  );
};

export default Cta;
