import { useRef, useState, memo } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './PopularSlider.scss';

const sliderData = [
  {
    src: 'assets/popular/1.png',
    id: 1,
    alt: 'popular 1',
    title: 'Пепперони фреш',
    price: 'от 289 ₽'
  },
  {
    src: 'assets/popular/2.png',
    id: 2,
    alt: 'popular 2',
    title: '3 пиццы',
    price: '1 099 ₽'
  },
  {
    src: 'assets/popular/3.png',
    id: 3,
    alt: 'popular 3',
    title: 'Додстер',
    price: '169 ₽'
  },
  {
    src: 'assets/popular/4.png',
    id: 4,
    alt: 'popular 4',
    title: 'Комбо от 599 ₽',
    price: '599 ₽'
  },
  {
    src: 'assets/popular/5.png',
    id: 5,
    alt: 'popular 5',
    title: '2 соуса',
    price: '75 ₽'
  }
];

const breakpoints = {
  320: {
    spaceBetween: 10,
    slidesPerView: 1
  },
  375: {
    slidesPerView: 1.1,
    spaceBetween: 10
  },
  400: {
    slidesPerView: 1.2,
    spaceBetween: 10
  },
  480: {
    slidesPerView: 1.5,
    spaceBetween: 10
  },
  580: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  680: {
    slidesPerView: 2.2,
    spaceBetween: 10
  },
  780: {
    slidesPerView: 2.6,
    spaceBetween: 10
  },
  922: {
    slidesPerView: 3,
    spaceBetween: 10
  },
  1024: {
    slidesPerView: 3.5,
    spaceBetween: 10
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 25
  }
};

const PopularSlider = memo(() => {
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="popular">
      <h2 className="popular__title">Часто заказывают</h2>
      <div className="popular__container">
        <Swiper
          breakpoints={breakpoints}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          modules={[Navigation]}
          onInit={() => setInit(true)}>
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="popular__slide-item">
                <img src={item.src} alt={item.alt} />
                <div>
                  <h2 className="popular__slide-title">{item.title}</h2>
                  <p className="popular__slide-price">{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-navigation">
          <div ref={prevRef} className="slider-button slider-prev">
            <span>&#10094;</span>
          </div>
          <div ref={nextRef} className="slider-button slider-next">
            <span>&#10095;</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export { PopularSlider };
