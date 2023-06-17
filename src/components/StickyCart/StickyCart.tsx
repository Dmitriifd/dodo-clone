import { ReactComponent as CartIcon } from 'assets/img/cart-icon.svg';
import './StickyCart.scss';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { openCart, selectTotalItems } from 'redux/cart/cartSlice';

const StickyCart = () => {
  const dispatch = useAppDispatch();
   const totalCount = useAppSelector(selectTotalItems);

  return (
    <div className="sticky" onClick={() => dispatch(openCart())}>
      <a href="#" className="sticky-cart">
        <span>{totalCount}</span>
        <CartIcon />
      </a>
    </div>
  );
};

export { StickyCart };
