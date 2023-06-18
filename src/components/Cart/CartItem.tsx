import { removeFromCart } from 'redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { ICartItem } from 'types/cartItem';

import { Counter } from 'components/Counter';

const CartItem = ({
  id,
  title,
  price,
  img,
  type,
  size,
  diameter,
  quantity,
  addedIngredients
}: ICartItem) => {
  const dispatch = useAppDispatch();
  const { orderList } = useAppSelector((state) => state.cart);
  const findProduct = orderList.find((item) => item.id === id);

  return (
    <div className="cart-item">
      <button
        className="cart-item__btn"
        onClick={() => dispatch(removeFromCart(id))}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z"
            fill="#000"></path>
        </svg>
      </button>
      <div className="cart-item__content">
        <img className="cart-item__img" src={img} alt={title} />
        <div className="cart-item__info">
          <h3 className="cart-item__title">{title}</h3>
          {size && (
            <p className="cart-item__desc">{`${size} ${diameter} см, ${type.toLowerCase()} тесто`}</p>
          )}
          {addedIngredients?.length > 0 && (
            <p className="cart-item__ingredient">
              + {addedIngredients?.map((item) => item.title).join(', ')}
            </p>
          )}
        </div>
      </div>
      <div className="cart-item__footer">
        <p className="cart-item__price">
          {findProduct && findProduct.quantity * findProduct.price} ₽
        </p>
        <Counter id={id} />
      </div>
    </div>
  );
};

export { CartItem };
