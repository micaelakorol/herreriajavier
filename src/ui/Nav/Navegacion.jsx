import { useState } from 'react';
import { logo } from '../../assets/Icons';
import { Link } from 'react-scroll';
import Icon from '../../reusable/Icon';
import CustomLink from '../../reusable/CustomLink';
import './navegacion.css';

const Navegacion = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="container_navigation">
      <section className="icons">
        <Icon alt="logo" src={logo} width={90} height={90} />

        {/* Botón hamburguesa (solo mobile) */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {' '}
          {/** 3 lineas */}
          <span />
          <span />
          <span />
        </button>
      </section>
      {/** open === true → agrega la clase show, sino no agrega nada */}
      <nav className={`container_btn ${open ? 'show' : ''}`}>
        <CustomLink
          href="https://wa.me/5492215404185"
          className="btn_navigation cta"
          onClick={closeMenu}
        >
          Pedir presupuesto
        </CustomLink>

        <Link
          activeClass="active"
          to="services"
          smooth={true}
          duration={500}
          className="btn_navigation btn_primary"
          onClick={closeMenu}
        >
          Servicios
        </Link>
      </nav>
    </header>
  );
};

export default Navegacion;
