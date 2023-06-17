import { isMobile } from 'react-device-detect';
import { Modal } from 'components/Modal';
import { MouseEvent, useState} from 'react';
import { useLockedBody } from 'usehooks-ts';
import { IProduct } from 'types/product';
import './ProductCard.scss';

interface ProductCardProps {
  item: IProduct;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const { img, title, desc, price } = item;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [locked, setLocked] = useLockedBody(false, 'root');

  function openModal(
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) {
    e.preventDefault();
    setIsOpenModal(true);
    setLocked(!locked);
  }

  return (
    <>
      {isOpenModal && (
        <Modal
          visible={isOpenModal}
          setVisible={setIsOpenModal}
          locked={locked}
          setLocked={setLocked}
          items={item}
        />
      )}
      <article className="pizza__item product-card">
        <a href="#" className="product-card__img" onClick={openModal}>
          <img src={img} alt={title} />
        </a>
        <div className="product-card__body">
          <h3 className="product-card__title">
            <a href="#" className="product-card__link" onClick={openModal}>
              {title}
            </a>
          </h3>
          <p className="product-card__description">{desc}</p>
          <div className="product-card__footer">
            <p className="product-card__price">от {price[0] || price} ₽</p>
            <button className="product-card__button" onClick={openModal}>
              {isMobile ? `от ${price[0]} ₽` : 'Выбрать'}
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export { ProductCard };
