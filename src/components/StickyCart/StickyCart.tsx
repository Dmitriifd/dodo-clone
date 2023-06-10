import { ReactComponent as CartIcon } from 'assets/img/cart-icon.svg';
import './StickyCart.scss';
import { useAppDispatch } from 'redux/store';
import { closeCart, openCart } from 'redux/cart/slice';

const StickyCart = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="sticky" onClick={() => dispatch(openCart())}>
      <a href="#" className="sticky-cart">
        <span>2</span>
        <CartIcon />
      </a>
    </div>
  );
};

export { StickyCart };
