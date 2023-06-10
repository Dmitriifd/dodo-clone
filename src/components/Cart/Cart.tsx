import clsx from 'clsx';
import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import { useEffect, useState } from 'react';
import { CartEmpty } from './CartEmpty';
import { CartHeader } from './CartHeader';
import { CartItem } from './CartItem';
import { CartFooter } from './CartFooter';
import { CartSlider } from './CartSlider';
import './Cart.scss';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { closeCart } from 'redux/cart/slice';

const cartItemData = [
  {
    id: 1,
    img: 'assets/pizza/cart-item.png',
    title: 'Пицца от шефа',
    desc: 'Средняя 30 см, традиционное тесто + томаты',
    price: '1 038 ₽'
  },
  {
    id: 2,
    img: 'assets/pizza/cart-item.png',
    title: 'Пицца от шефа',
    desc: 'Средняя 30 см, традиционное тесто + томаты',
    price: '1 038 ₽'
  }
];

const Cart = () => {
  const [isEmpty, _] = useState(false);
  const { isOpenCart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpenCart) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isOpenCart]);

  return (
    <div
      className={clsx('cart-overlay', { active: isOpenCart })}
      onClick={() => dispatch(closeCart())}>
      <div
        className={clsx('cart__wrapper', { active: isOpenCart })}
        onClick={(e) => e.stopPropagation()}>
        {isOpenCart && (
          <button
            className="cart__close-button"
            onClick={() => dispatch(closeCart())}>
            <CloseIcon />
          </button>
        )}
        {isEmpty ? (
          <CartEmpty />
        ) : (
          <div className="cart__content cart">
            <CartHeader />
            <div className="cart__header">
              <h3 className="cart__title">2 товара на 1 038 ₽</h3>
            </div>
            <div className="cart__body">
              {cartItemData.map((cartItem) => (
                <CartItem key={cartItem.id} {...cartItem} />
              ))}
            </div>
            <div className="cart__slider">
              <h3 className="cart__slider-title">Добавить к заказу?</h3>
              <CartSlider />
            </div>
            <div className="cart__footer">
              <CartFooter />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart };
