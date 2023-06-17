import { useAppDispatch, useAppSelector } from 'redux/store';
import { decreaseQuantity, increaseQuantity } from 'redux/cart/cartSlice';
import './Counter.scss';

const Counter = ({id}: {id: string}) => {
  const dispatch = useAppDispatch()
  const { orderList } = useAppSelector((state) => state.cart);
  const count = orderList.find((item) => item.id === id);

  return (
    <div className="counter">
      <button
        className="counter__button counter__button--minus"
        onClick={() => dispatch(decreaseQuantity(id))}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg">
          <rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect>
        </svg>
      </button>
      <p className="counter-amount">{count?.quantity}</p>
      <button
        className="counter__button counter__button--plus"
        onClick={() => dispatch(increaseQuantity(id))}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="#454B54">
            <rect x="4" width="2" height="10" ry="1"></rect>
            <rect y="4" width="10" height="2" rx="1"></rect>
          </g>
        </svg>
      </button>
    </div>
  );
};

export { Counter };
