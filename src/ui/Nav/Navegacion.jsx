import { logo } from "../../assets/Icons";
import { Link } from "react-scroll";
import Icon from "../../reusable/Icon";
import CustomLink from "../../reusable/CustomLink";
import './navegacion.css'; // <-- importamos CSS normal

const Navegacion = () => {
  return (
    <header className="container_navigation">
      <Icon alt="logo" src={logo} width={100} height={100} />
      <nav className="container_btn">
        {/* Link service */}
        <CustomLink href="tel:2215404185" className="btn_navigation" />
        <Link
          activeClass="active"
          to="services"
          className="btn_navigation"
        >
          Servicios
        </Link>
      </nav>
    </header>
  );
};

export default Navegacion;
