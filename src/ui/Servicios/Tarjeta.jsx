
import { services } from "../../assets/dataServices";
import './tarjeta.css';

const Tarjeta = () => {
  const service = services.item;
  const soldador = "https://res.cloudinary.com/dgqyqd2pa/image/upload/v1765896623/landing_page_herreria/5_l5uigi.png"
  return (
    <section className="card_container_service">
      {service.map((item) => (
        <div key={item.id}>
          <img src={soldador} alt='Soldador' className="image_card" width={30} height={30}/>
          <h3>{item.title}</h3>
          <p className="service_description">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Tarjeta;
