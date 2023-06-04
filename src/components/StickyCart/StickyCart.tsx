import { ReactComponent as CartIcon } from 'assets/img/cart-icon.svg';
import './StickyCart.scss';

const StickyCart = ({ toggleCart }: any) => {
  return (
    <div className="sticky" onClick={toggleCart}>
      <a href="#" className="sticky-cart">
        <span>2</span>
        <CartIcon />
      </a>
    </div>
  );
};

export { StickyCart };
