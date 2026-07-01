
import { services } from "../../assets/dataServices";
import './tarjeta.css';

const Tarjeta = () => {
  const service = services.item;

  return (
    <section className="card_container_service">
      {service.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id}>
            <Icon className="image_card" />
            <h5>{item.title}</h5>
            <p className="description-subtitle">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};
export default Tarjeta;