import { Counter } from 'components/Counter';
import { addProductFromCart } from 'redux/cart/slice';
import { useAppDispatch, useAppSelector } from 'redux/store';

interface SauceItemProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity?: number;
  isOpen: boolean;
}

const SauceItem = ({ imageUrl, title, price, id }: SauceItemProps) => {
  const orderList = useAppSelector((state) => state.cart.orderList);
  const count = orderList.find((item) => item.id === id);

  const dispatch = useAppDispatch();
  const handleAddSauce = (id: string) => {
    const sauce = {
      imageUrl,
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
        <img src={imageUrl} alt="Сырный соус" />
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
