import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import { ReactComponent as RadiusM } from 'assets/img/radius-m.svg';
import { ReactComponent as RadiusL } from 'assets/img/radius-x.svg';
import { ReactComponent as InfoIcon } from 'assets/img/modal-info-icon.svg';
import { ModalIngredientButton } from './ModalIngredientButton';
import { selectWeight } from 'utils/selectWeight';
import './Modal.scss';

interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  setVisible: (arg: boolean) => void;
  locked: Boolean;
  setLocked: (arg: boolean) => void;
}

const modalDataButtons = [
  {
    id: 1,
    title: 'Сливочная моцарелла',
    price: '79 ₽',
    img: 'assets/button/1.png'
  },
  { id: 2, title: 'Свежие томаты', price: '59 ₽', img: 'assets/button/2.png' },
  { id: 3, title: 'Сырный бортик', price: '179 ₽', img: 'assets/button/3.png' },
  {
    id: 4,
    title: 'Чеддер и пармезан',
    price: '79 ₽',
    img: 'assets/button/4.png'
  },
  {
    id: 5,
    title: 'Острый халапеньо',
    price: '59 ₽',
    img: 'assets/button/5.png'
  },
  {
    id: 6,
    title: 'Нежный цыпленок',
    price: '79 ₽',
    img: 'assets/button/6.png'
  },
  { id: 7, title: 'Ветчина', price: '79 ₽', img: 'assets/button/7.png' },
  { id: 8, title: 'Шампиньоны', price: '59 ₽', img: 'assets/button/8.png' },
  {
    id: 9,
    title: 'Маринованные огурчики',
    price: '59 ₽',
    img: 'assets/button/9.png'
  },
  {
    id: 10,
    title: 'Хрустящий бекон',
    price: '79 ₽',
    img: 'assets/button/10.png'
  },
  {
    id: 11,
    title: 'Кубики брынзы',
    price: '79 ₽',
    img: 'assets/button/11.png'
  },
  {
    id: 12,
    title: 'Острая чоризо',
    price: '79 ₽',
    img: 'assets/button/12.png'
  },
  { id: 13, title: 'Сыр блю чиз', price: '79 ₽', img: 'assets/button/13.png' },
  {
    id: 14,
    title: 'Итальянские травы',
    price: '79 ₽',
    img: 'assets/button/14.png'
  },
  {
    id: 15,
    title: 'Сочные ананасы',
    price: '39 ₽',
    img: 'assets/button/15.png'
  },
  {
    id: 16,
    title: 'Сладкий перец',
    price: '59 ₽',
    img: 'assets/button/16.png'
  },
  { id: 17, title: 'Маслины', price: '79 ₽', img: 'assets/button/17.png' },
  { id: 18, title: 'Митболы', price: '79 ₽', img: 'assets/button/18.png' }
];

const Modal = ({
  children,
  visible,
  setVisible,
  setLocked,
  locked,
  items
}: any) => {
  const { title, desc, price, types, weight, sizes, diameter, images } = items;

  const [selectSize, setSelectSize] = useState(1);
  const [selectType, setSelectType] = useState(0);


  function handleSelectSize(num: number) {
    if (num === 0) {
      setSelectType(0);
    }
    setSelectSize(num);
  }

  function handleSelectType(num: number) {
    setSelectType(num);
  }

  const closeModal = () => {
    setVisible(false);
    setLocked(!locked);
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
              className={clsx(['modal__img', `modal__img-size${selectSize}`])}>
              <img
                src={selectType === 0 ? images.trad : images.thin}
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
                {diameter[selectSize]} см, {types[selectType].toLowerCase()}{' '}
                тесто, {selectWeight(selectSize, selectType, weight)} г
              </p>
              <div className="modal-product__desc">{desc}</div>
              <div
                className={`modal-product__sizes modal-product__type modal-product__size-${selectSize}`}>
                {sizes.map((size: string, i: number) => (
                  <button
                    key={i}
                    className="modal-product__btn"
                    data-type="small"
                    onClick={() => handleSelectSize(i)}>
                    {size}
                  </button>
                ))}
              </div>
              <div
                className={`modal-product__sizes modal-product__type modal-product__type-${selectType}`}>
                {types.map((type: string, i: number) => (
                  <button
                    key={i}
                    disabled={selectSize === 0}
                    className="modal-product__btn"
                    data-type="trad"
                    onClick={() => handleSelectType(i)}>
                    {type}
                  </button>
                ))}
              </div>
              <div className="modal-product__wrap product-ingredients">
                <h2 className="product-ingredients__title">
                  Добавить по вкусу
                </h2>
                <ul className="product-ingredients__list">
                  {modalDataButtons.map((item) => (
                    <li key={item.id} className="product-ingredients__item">
                      <ModalIngredientButton {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="modal-product__button">
              Добавить в корзину за {price[selectSize]} Р
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
