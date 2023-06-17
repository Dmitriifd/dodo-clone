import { isMobile } from 'react-device-detect';
import { IProduct } from 'types/product';
import { useAppDispatch } from 'redux/store';
import { openProductModal } from 'redux/productModal/productModalSlice';
import { MouseEvent } from 'react';
import './ProductCard.scss';

interface ProductCardProps {
  item: IProduct;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const { img, title, desc, price } = item;

  const dispatch = useAppDispatch();

  const handleProductClick = (
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    dispatch(openProductModal(item));
  };

  return (
    <>
      <article className="pizza__item product-card">
        <a href="#" className="product-card__img" onClick={handleProductClick}>
          <img src={img} alt={title} />
        </a>
        <div className="product-card__body">
          <h3 className="product-card__title">
            <a
              href="#"
              className="product-card__link"
              onClick={handleProductClick}>
              {title}
            </a>
          </h3>
          <p className="product-card__description">{desc}</p>
          <div className="product-card__footer">
            <p className="product-card__price">от {price[0] || price} ₽</p>
            <button
              className="product-card__button"
              onClick={handleProductClick}>
              {isMobile ? `от ${price[0]} ₽` : 'Выбрать'}
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export { ProductCard };
