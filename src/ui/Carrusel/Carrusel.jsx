import { images } from '../../assets/dataImages';
import { Element } from 'react-scroll';
import Icon from '../../reusable/Icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css';
import './imagen.css'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Carrusel = () => {
  const image = images.item;
  return (
    <Element name="jobs">
      <section className="container_card">
        <h3 className="titles"> Algunos de nuestros trabajos </h3>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {image.map((item) => (
            <SwiperSlide key={item.id}>
              <Icon src={item.src} alt={item.alt} width={300} height={350} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Element>
  );
};

export default Carrusel;
