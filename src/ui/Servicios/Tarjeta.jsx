
import { services } from "../../assets/dataServices";
import './tarjeta.css';

const Tarjeta = () => {
  const service = services.item;
  const soldador = "https://res.cloudinary.com/dgqyqd2pa/image/upload/v1770831657/landing_page_herreria/soldador_wmvzqv.png"
  return (
    <section className="card_container_service">
      {service.map((item) => (
        <div key={item.id}>
          <img src={soldador} alt={item.title} className="image_card"/>
          <h3>{item.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default Tarjeta;
