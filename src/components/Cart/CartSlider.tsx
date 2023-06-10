import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { ReactComponent as CartArrow } from 'assets/img/arrow-cart.svg';
import sauce from 'assets/img/sauce-bg.png';
import dodster from 'assets/img/cart-order-3.jpeg';
import drink from 'assets/img/cart-order-1.jpeg';
import drink2 from 'assets/img/cart-order-2.jpeg';
import sauce1 from 'assets/img/sauce-1.jpeg';
import sauce2 from 'assets/img/sauce-2.jpeg';
import sauce3 from 'assets/img/sauce-3.jpeg';
import sauce4 from 'assets/img/sauce-4.jpeg';
import { Counter } from 'components/Counter';

const CartSlider = () => {
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddSouce, setAddSouce] = useState(false);

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
          <button
            className="cart-add-order sauce"
            onClick={() => setIsOpen(!isOpen)}>
            <img className="sauce-img" src={sauce} alt="соусы" />
            <h3 className="sauce-title">Соусы</h3>
          </button>
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
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx('modal-order-overlay', { active: isOpen })}></div>
      <div className={clsx('modal-order', { active: isOpen })}>
        <h2 className="modal-order__title">Соусы к бортикам и закускам</h2>

        <button className="modal-order__btn" onClick={() => setIsOpen(!isOpen)}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.293.293a1 1 0 111.414 1.414L8.414 7l5.293 5.293a1 1 0 01-1.414 1.414L7 8.414l-5.293 5.293a1 1 0 01-1.414-1.414L5.586 7 .293 1.707A1 1 0 111.707.293L7 5.586 12.293.293z"
              fill="#000"></path>
          </svg>
        </button>
        <div className="modal-order__item order-item">
          <div className="order-item__img">
            <img src={sauce1} alt="Сырный соус" />
          </div>
          <h3 className="order-item__title">Сырный соус</h3>
          {!isAddSouce ? (
            <button
              className="order-item__btn"
              onClick={() => setAddSouce(!isAddSouce)}>
              45 ₽
            </button>
          ) : (
            <Counter />
          )}
        </div>
        <div className="modal-order__item order-item">
          <div className="order-item__img">
            <img src={sauce2} alt="Сырный соус" />
          </div>
          <h3 className="order-item__title">Барбекю</h3>
          <button className="order-item__btn">45 ₽</button>
        </div>
        <div className="modal-order__item order-item">
          <div className="order-item__img">
            <img src={sauce3} alt="Сырный соус" />
          </div>
          <h3 className="order-item__title">Чесночный соус</h3>
          <button className="order-item__btn">45 ₽</button>
        </div>
        <div className="modal-order__item order-item">
          <div className="order-item__img">
            <img src={sauce4} alt="Сырный соус" />
          </div>
          <h3 className="order-item__title">Малиновое варенье</h3>
          <button className="order-item__btn">45 ₽</button>
        </div>
      </div>
    </div>
  );
};

export { CartSlider };
