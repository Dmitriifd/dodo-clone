import { addProductFromCart } from 'redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';

import { Counter } from 'components/Counter';

interface SauceItemProps {
  id: string;
  title: string;
  price: number;
  img: string;
  quantity?: number;
  isOpen: boolean;
}

const SauceItem = ({ img, title, price, id }: SauceItemProps) => {
  const orderList = useAppSelector((state) => state.cart.orderList);
  const count = orderList.find((item) => item.id === id);

  const dispatch = useAppDispatch();
  const handleAddSauce = (id: string) => {
    const sauce = {
      img,
      title,
      price,
      id,
      quantity: 1
    };

    dispatch(addProductFromCart(sauce));
  };

  return (
    <div className="modal-order__item order-item">
      <div className="order-item__img">
        <img src={img} alt="Сырный соус" />
      </div>
      <h3 className="order-item__title">{title}</h3>
      {!count?.quantity ? (
        <button className="order-item__btn" onClick={() => handleAddSauce(id)}>
          {price} ₽
        </button>
      ) : (
        <Counter id={id} />
      )}
    </div>
  );
};

export { SauceItem };
