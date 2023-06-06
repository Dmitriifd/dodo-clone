import { ReactComponent as LogoIcon } from 'assets/img/pizza.svg';
import { ReactComponent as Back } from 'assets/img/arrow-back.svg';
import { ReactComponent as Burger } from 'assets/img/burger-icon.svg';

const CartDrawerHeader = ({ toggleCart }: any) => {
  return (
    <div className="drawer-header">
      <div className="drawer-back">
        <Back onClick={toggleCart} />
      </div>
      <LogoIcon className="empty-logo" width={35} height={35} />
      <p>ДОДО PIZZA</p>
      <Burger className="drawer-burger" />
    </div>
  );
};

export { CartDrawerHeader };
