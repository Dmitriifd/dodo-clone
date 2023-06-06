import { Counter } from 'components/Counter';

interface CartItem {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const CartItem = ({ img, title, desc, price }: CartItem) => {
  return (
    <div className="cart-item">
      <button className="cart-item__btn">
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
          <p className="cart-item__desc">{desc}</p>
        </div>
      </div>
      <div className="cart-item__footer">
        <p className="cart-item__price">{price}</p>
        <Counter />
      </div>
    </div>
  );
};

export { CartItem };