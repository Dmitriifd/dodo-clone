import empty from 'assets/img/emptyCart.svg';

import { CartHeader } from './CartHeader';

import './Cart.scss';

const CartEmpty = () => {
  return (
    <section className="empty">
      <CartHeader />
      <div className="empty-wrapper">
        <img src={empty} className="empty-image" />
        <h2 className="empty-title">Ой, пусто!</h2>
        <p className="empty-cart-text">
          Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар
          <br /> Мы доставим ваш заказ от 549 ₽
        </p>
      </div>
    </section>
  );
};

export { CartEmpty };
