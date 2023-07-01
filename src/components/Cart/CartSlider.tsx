import { memo,useEffect, useRef, useState } from 'react';
import { ReactComponent as CartArrow } from 'assets/img/arrow-cart.svg';
import drink from 'assets/img/cart-order-1.jpeg';
import drink2 from 'assets/img/cart-order-2.jpeg';
import dodster from 'assets/img/cart-order-3.jpeg';
import sauce1 from 'assets/img/sauce-1.jpeg';
import sauce2 from 'assets/img/sauce-2.jpeg';
import sauce3 from 'assets/img/sauce-3.jpeg';
import sauce4 from 'assets/img/sauce-4.jpeg';
import sauce from 'assets/img/sauce-bg.png';
import clsx from 'clsx';
import { addProductFromCart } from 'redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ISauceItem } from 'types/cartItem';

import { SauceItem } from './SauceItem';

const data = [
  { id: '11', title: 'Сырный соус', price: 45, img: sauce4, quantity: 1 },
  { id: '22', title: 'Барбекю', price: 45, img: sauce2, quantity: 1 },
  {
    id: '33',
    title: 'Чесночный соус',
    price: 45,
    img: sauce3,
    quantity: 1
  },
  {
    id: '44',
    title: 'Малиновое варенье',
    price: 45,
    img: sauce1,
    quantity: 1
  }
];

const sliderItems = [
  {
    id: '111',
    title: 'Додстер',
    price: 169,
    img: dodster,
    quantity: 1
  },
  {
    id: '222',
    title: 'Rich Tea Черный с лимоном',
    price: 119,
    img: drink2,
    quantity: 1
  },
  {
    id: '333',
    title: 'Rich Tea Зеленый с манго',
    price: 119,
    img: drink,
    quantity: 1
  }
];

const CartSlider = memo(() => {
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isOpenCartPopUp, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const isOpenCart = useAppSelector((state) => state.cart.isOpenCart);

  const [sauces, ,] = useState(data);
  const [products, ,] = useState(sliderItems);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    return () => setSelectedProducts([]);
  }, [isOpenCart]);

  const filteredProducts = products.filter(
    (product) => !selectedProducts.includes(product.id)
  );

  const handleAddProduct = (product: ISauceItem) => {
    setSelectedProducts([...selectedProducts, product.id]);
    dispatch(addProductFromCart(product));
  };

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
            onClick={() => setIsOpen(!isOpenCartPopUp)}>
            <img className="sauce-img" src={sauce} alt="соусы" />
            <h3 className="sauce-title">Соусы</h3>
          </button>
        </SwiperSlide>
        {filteredProducts.map(({ id, title, price, img, quantity }) => {
          return (
            <SwiperSlide
              key={id}
              onClick={() =>
                handleAddProduct({ id, title, price, img, quantity })
              }>
              <div className="cart-add-order">
                <img src={img} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{price} ₽</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
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
        onClick={() => setIsOpen(!isOpenCartPopUp)}
        className={clsx('modal-order-overlay', {
          active: isOpenCartPopUp
        })}></div>
      <div className={clsx('modal-order', { active: isOpenCartPopUp })}>
        <h2 className="modal-order__title">Соусы к бортикам и закускам</h2>

        <button
          className="modal-order__btn"
          onClick={() => setIsOpen(!isOpenCartPopUp)}>
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
        {sauces.map((sauce) => (
          <SauceItem key={sauce.id} {...sauce} isOpen={isOpenCartPopUp} />
        ))}
      </div>
    </div>
  );
});

export { CartSlider };
