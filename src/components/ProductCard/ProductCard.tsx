import { isMobile } from 'react-device-detect';
import './ProductCard.scss';

interface ProductCardProps {
  img: string;
  title: string;
  description: string;
  price: string;
  id: number;
}

const ProductCard = ({ img, title, description, price }: ProductCardProps) => {
  return (
    <article className="pizza__item product-card">
      <a href="#" className="product-card__img">
        <img src={img} alt={title} />
      </a>
      <div className="product-card__body">
        <h3 className="product-card__title">
          <a href="#" className="product-card__link">
            {title}
          </a>
        </h3>
        <p className="product-card__description">{description}</p>
        <div className="product-card__footer">
          <p className="product-card__price">{price}</p>
          <button className="product-card__button">
            {isMobile ? price : 'Выбрать'}
          </button>
        </div>
      </div>
    </article>
  );
};

export { ProductCard };
