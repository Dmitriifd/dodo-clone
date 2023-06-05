import clsx from 'clsx';
import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import { useEffect, useState } from 'react';
import { EmptyCart } from './EmptyCart';
import { CartDrawerHeader } from './CartDrawerHeader';
import './Cart.scss';
import { CartItem } from './CartItem';

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
  },
];

const CartDrawer = ({ isOpenCart, toggleCart }: any) => {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (isOpenCart) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isOpenCart]);

  return (
    <div
      className={clsx('drawer-overlay', { active: isOpenCart })}
      onClick={toggleCart}>
      <div
        className={clsx('drawer__wrapper', { active: isOpenCart })}
        onClick={(e) => e.stopPropagation()}>
        {isOpenCart && (
          <button className="drawer__button" onClick={toggleCart}>
            <CloseIcon />
          </button>
        )}
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="drawer__content cart">
            <CartDrawerHeader />
            <div className="drawer__header">
              <h3 className="cart__title">2 товара на 1 038 ₽</h3>
            </div>
            <div className="drawer__body">
              {cartItemData.map((cartItem) => (
                <CartItem key={cartItem.id} {...cartItem} />
              ))}
            </div>
            <div className="drawer__footer"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export { CartDrawer };
