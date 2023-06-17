import { ReactNode, useEffect } from 'react';
import { clsx } from 'clsx';
import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import { ReactComponent as RadiusM } from 'assets/img/radius-m.svg';
import { ReactComponent as RadiusL } from 'assets/img/radius-x.svg';
import { ReactComponent as InfoIcon } from 'assets/img/modal-info-icon.svg';
import { ModalIngredientButton } from './ModalIngredientButton';
import { selectWeight } from 'utils/selectWeight';
import { useAppDispatch, useAppSelector } from 'redux/store';
import {
  resetCurrentPrice,
  selectSize,
  selectType,
  setCurrentPrice
} from 'redux/products/slice';
import './Modal.scss';
import { IProduct } from 'types/product';
import { addToCart } from 'redux/cart/slice';
import { ICartItem } from 'types/cartItem';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  setVisible: (arg: boolean) => void;
  locked: Boolean;
  setLocked: (arg: boolean) => void;
  items: IProduct;
}

  const notify = ({ title, desc }: { title: string; desc?: any }) =>
    toast(
      desc ?
      `Добавлено:
      ${title} ${desc ?? desc} см
    ` : `Добавлено: ${title}`,
      {
        icon: '🍕',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '15px'
        }
      }
    );

const Modal = ({
  children,
  visible,
  setVisible,
  setLocked,
  locked,
  items,
}: ModalProps) => {
  const {
    title,
    desc,
    price,
    types,
    weight,
    sizes,
    diameter,
    images,
    ingredients,
    id,
    img,
    type
  } = items;

  const {
    activeSize,
    activeType,
    currentPrice,
    ingredientsPrice,
    ingredients: addedIngredients
  } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPrice(price[activeSize]));
  }, [price[activeType], activeSize, ingredientsPrice]);

  useEffect(() => {
    return () => {
      dispatch(resetCurrentPrice());
    };
  }, []);

  const closeModal = () => {
    setVisible(false);
    setLocked(!locked);
  };

  const addPizzaToCart = () => {
    const item: ICartItem = {
      id: nanoid(),
      title,
      price: currentPrice,
      img,
      type: types[activeType],
      size: sizes[activeSize],
      diameter: diameter[activeSize],
      quantity: 1,
      addedIngredients
    };

    dispatch(addToCart(item));
    setTimeout(() => {
      closeModal();
      notify({ title, desc: diameter[activeSize] });
    }, 300);
  };

  const addProductToCart = () => {
    const item: any = {
      id,
      title,
      price,
      img,
      quantity: 1
    };

    dispatch(addToCart(item));
    setTimeout(() => {
      closeModal();
      notify({ title });
    }, 300);
  };

  return (
    <div
      className={clsx('modal', {
        active: visible
      })}
      onClick={closeModal}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <button className="modal-button-close" onClick={closeModal}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.925 11.16a1.25 1.25 0 00-1.766-.085l-10.16 9.236-10.158-9.236a1.25 1.25 0 10-1.682 1.85l10.462 9.511.017.016c.079.072.184.167.285.246.12.093.31.223.568.301.332.101.686.101 1.018 0 .258-.078.447-.208.568-.301.1-.079.205-.174.284-.246l.018-.016 10.461-9.511a1.25 1.25 0 00.085-1.766z"
              fill="#000"></path>
          </svg>
        </button>
        <div className="modal__icon" onClick={closeModal}>
          <CloseIcon />
        </div>
        {children}
        {type === 'pizza' ? (
          <div className="modal__wrap">
            <div className="modal__left">
              <div
                className={clsx([
                  'modal__img',
                  `modal__img-size${activeSize}`
                ])}>
                <img
                  src={activeType === 0 ? images.trad : images.thin}
                  alt={title}
                />
              </div>
              <div className="modal__radius-m">
                <RadiusM />
              </div>
              <div className="modal__radius-l">
                <RadiusL />
              </div>
            </div>
            <div className="modal__right modal-product">
              <div className="modal-product__inner">
                <div className="modal-product__head">
                  <h2 className="modal-product__title">{title}</h2>
                  <button>
                    <InfoIcon />
                  </button>
                </div>
                <p className="modal-product__info">
                  {diameter[activeSize]} см, {types[activeType].toLowerCase()}{' '}
                  тесто, {selectWeight(activeSize, activeType, weight)} г
                </p>
                <div className="modal-product__desc">{desc}</div>
                <div
                  className={`modal-product__sizes modal-product__type modal-product__size-${activeSize}`}>
                  {sizes.map((size: string, i: number) => (
                    <button
                      key={i}
                      className="modal-product__btn"
                      data-type="small"
                      onClick={() => dispatch(selectSize(i))}>
                      {size}
                    </button>
                  ))}
                </div>
                <div
                  className={`modal-product__sizes modal-product__type modal-product__type-${activeType}`}>
                  {types.map((type: string, i: number) => (
                    <button
                      key={i}
                      disabled={activeSize === 0}
                      className="modal-product__btn"
                      data-type="trad"
                      onClick={() => dispatch(selectType(i))}>
                      {type}
                    </button>
                  ))}
                </div>
                <div className="modal-product__wrap product-ingredients">
                  <h2 className="product-ingredients__title">
                    Добавить по вкусу
                  </h2>
                  <ul className="product-ingredients__list">
                    {ingredients.map((item) => (
                      <li key={item.id} className="product-ingredients__item">
                        <ModalIngredientButton {...item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                className="modal-product__button"
                onClick={addPizzaToCart}>
                Добавить в корзину за {currentPrice} ₽
              </button>
            </div>
          </div>
        ) : (
          <div className="modal__wrap">
            <div className="modal__left">
              <div className="modal__img">
                <img src={img} alt={title} />
              </div>
            </div>
            <div className="modal__right modal-product">
              <div className="modal-product__inner">
                <div className="modal-product__head">
                  <h2 className="modal-product__title">{title}</h2>
                  <button>
                    <InfoIcon />
                  </button>
                </div>
                <p className="modal-product__info">
                  {weight}
                </p>
                <div className="modal-product__desc">{desc}</div>
              </div>

              <button
                className="modal-product__button"
                onClick={addProductToCart}>
                Добавить в корзину за {price} ₽
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Modal };
