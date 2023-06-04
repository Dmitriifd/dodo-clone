import empty from 'assets/img/emptyCart.svg';
import { CartDrawerHeader } from './CartDrawerHeader';
import './CartDrawer.scss';

const EmptyCart = () => {
  return (
    <section className="empty">
      <CartDrawerHeader />
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

export { EmptyCart };
