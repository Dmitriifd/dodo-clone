import { ReactComponent as LogoIcon } from 'assets/img/pizza.svg';
import { ReactComponent as Back } from 'assets/img/arrow-back.svg';
import { ReactComponent as Burger } from 'assets/img/burger-icon.svg';

const CartHeader = ({ toggleCart }: any) => {
  return (
    <div className="cart-mobile-header">
      <div className="caart-back-btn">
        <Back onClick={toggleCart} />
      </div>
      <LogoIcon className="cart-mobile-logo" width={35} height={35} />
      <p>ДОДО PIZZA</p>
      <Burger className="cart-burger-icon" />
    </div>
  );
};

export { CartHeader };
