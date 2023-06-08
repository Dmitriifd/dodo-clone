import { ReactNode } from 'react';
import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import { clsx } from 'clsx';
import { ReactComponent as RadiusM } from 'assets/img/radius-m.svg';
import { ReactComponent as RadiusL } from 'assets/img/radius-x.svg';
import { ReactComponent as InfoIcon } from 'assets/img/modal-info-icon.svg';
import { ReactComponent as CheckIcon } from 'assets/img/button-selected.svg';
import trad from 'assets/pizza/trad.png';
import thin from 'assets/pizza/thin.png';

import './Modal.scss';

interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  setVisible: (arg: boolean) => void;
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

const Modal = ({ children, visible, setVisible }: ModalProps) => {
  return (
    <div
      className={clsx('modal', {
        active: visible
      })}
      onClick={() => setVisible(false)}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__icon" onClick={() => setVisible(false)}>
          <CloseIcon />
        </div>
        {children}
        <div className="modal__wrap">
          <div className="modal__left">
            <div className="modal__img">
              <img src={trad} alt="Традиционная" />
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
                <h2 className="modal-product__title">Пепперони фреш</h2>
                <button>
                  <InfoIcon />
                </button>
              </div>
              <p className="modal-product__info">
                25 см, традиционное тесто, 400 г
              </p>
              <div className="modal-product__desc">
                Пикантная пепперони, увеличенная порция моцареллы, томаты,
                фирменный томатный соус
              </div>
              <div className="modal-product__sizes modal-product__type">
                <button className="active">Маленькая</button>
                <button>Средняя</button>
                <button>Большая</button>
              </div>
              <div className="modal-product__types modal-product__type">
                <button className="active">Традиционное</button>
                <button>Тонкое</button>
              </div>
              <div className="modal-product__wrap product-ingredients">
                <h2 className="product-ingredients__title">
                  Добавить по вкусу
                </h2>
                <ul className="product-ingredients__list">
                  {modalDataButtons.map(({id, title, price, img}) => (
                    <li key={id} className="product-ingredients__item">
                      <button className="product-ingredients__btn ingredients-card active">
                        <img
                          className="ingredients-card__img"
                          src={img}
                          alt={title}
                        />
                        <h3 className="ingredients-card__title">
                          {title}
                        </h3>
                        <p className="ingredients-card__price">{price}</p>
                        <CheckIcon />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="modal-product__button">
              Добавить в корзину за 500 Р
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
