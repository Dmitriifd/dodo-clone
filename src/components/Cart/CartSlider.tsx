import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { ReactComponent as CartArrow } from 'assets/img/arrow-cart.svg';
import sauce from 'assets/img/sauce-bg.png';
import dodster from 'assets/img/cart-order-3.jpeg';
import drink from 'assets/img/cart-order-1.jpeg';
import drink2 from 'assets/img/cart-order-2.jpeg';

const CartSlider = () => {
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="cart-slider">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        modules={[Navigation]}
        onInit={() => setInit(true)}
        className="mySwiper">
        <SwiperSlide>
          <div className="cart-add-order sauce">
            <img className="sauce-img" src={sauce} alt="соусы" />
            <h3 className="sauce-title">Соусы</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cart-add-order">
            <img src={dodster} alt="Додстер" />
            <div>
              <h3>Додстер</h3>
              <p>169 ₽</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cart-add-order">
            <img src={drink2} alt="Rich Tea Черный с лимоном" />
            <div>
              <h3>Rich Tea Черный с лимоном</h3>
              <p>119 ₽</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cart-add-order">
            <img src={drink} alt="Rich Tea Зеленый с манго" />
            <div>
              <h3>Rich Tea Зеленый с манго</h3>
              <p>119 ₽</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="cart-slider__navigation">
        <button ref={prevRef} className="cart-slider__button slider-prev">
          <CartArrow
            width={24}
            height={24}
            style={{ transform: 'rotate(-180deg)' }}
          />
        </button>
        <button ref={nextRef} className="cart-slider__button slider-next">
          <CartArrow width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export { CartSlider };
