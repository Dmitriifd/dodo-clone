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

interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  setVisible: (arg: boolean) => void;
  locked: Boolean;
  setLocked: (arg: boolean) => void;
  items: IProduct;
}

const Modal = ({
  children,
  visible,
  setVisible,
  setLocked,
  locked,
  items
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
    img
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

  const addProductToCart = () => {
    const item: ICartItem = {
      id: nanoid(),
      title,
      price: currentPrice,
      imageUrl: img,
      type: types[activeType],
      size: sizes[activeSize],
      diameter: diameter[activeSize],
      quantity: 1,
      addedIngredients
    };

    dispatch(addToCart(item));

    setTimeout(() => {
      closeModal();
    }, 300);
  };

  return (
    <div
      className={clsx('modal', {
        active: visible
      })}
      onClick={closeModal}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__icon" onClick={closeModal}>
          <CloseIcon />
        </div>
        {children}
        <div className="modal__wrap">
          <div className="modal__left">
            <div
              className={clsx(['modal__img', `modal__img-size${activeSize}`])}>
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
                {diameter[activeSize]} см, {types[activeType].toLowerCase()}
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
              onClick={addProductToCart}>
              Добавить в корзину за {currentPrice} ₽
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
