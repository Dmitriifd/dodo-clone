import clsx from 'clsx';
import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import { useEffect } from 'react';
import { CartEmpty } from './CartEmpty';
import { CartHeader } from './CartHeader';
import { CartItem } from './CartItem';
import { CartFooter } from './CartFooter';
import { CartSlider } from './CartSlider';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { closeCart, selectTotalCost, selectTotalItems } from 'redux/cart/slice';
import { declOfNum } from 'utils/declOfNum';
import './Cart.scss';

const Cart = () => {
  const { isOpenCart, orderList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(selectTotalCost);
  const totalCount = useAppSelector(selectTotalItems);

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
        {!orderList.length ? (
          <CartEmpty />
        ) : (
          <div className="cart__content cart">
            <CartHeader />
            <div className="cart__header">
              <h3 className="cart__title">
                {declOfNum(totalCount, ['товар', 'товара', 'товаров'])} на
                {totalPrice} ₽
              </h3>
            </div>
            <div className="cart__body">
              {orderList.map((cartItem) => (
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
