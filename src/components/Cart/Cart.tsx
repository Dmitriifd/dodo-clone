import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import clsx from 'clsx';
import { closeCart, selectTotalCost, selectTotalItems } from 'redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { useLockedBody } from 'usehooks-ts';
import { declOfNum } from 'utils/declOfNum';

import { CartEmpty } from './CartEmpty';
import { CartFooter } from './CartFooter';
import { CartHeader } from './CartHeader';
import { CartItem } from './CartItem';
import { CartSlider } from './CartSlider';

import './Cart.scss';

const Cart = () => {
  const { isOpenCart, orderList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(selectTotalCost);
  const totalCount = useAppSelector(selectTotalItems);
  const [, ,] = useLockedBody(isOpenCart, 'root');

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  return (
    <div
      className={clsx('cart-overlay', { active: isOpenCart })}
      onClick={handleCloseCart}>
      <div
        className={clsx('cart__wrapper', { active: isOpenCart })}
        onClick={(e) => e.stopPropagation()}>
        {isOpenCart && (
          <button className="cart__close-button" onClick={handleCloseCart}>
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
                {declOfNum(totalCount, ['товар', 'товара', 'товаров'])} на{' '}
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
