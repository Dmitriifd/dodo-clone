import { useAppSelector } from 'redux/store';
import { declOfNum } from 'utils/declOfNum';

const CartFooter = () => {
  const { totalCount, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <div className="cart-footer">
      <div className="cart-footer__promo">
        <input
          type="text"
          className="cart-footer__input"
          placeholder="Промокод"
        />
      </div>
      <div className="cart-footer__order">
        <div className="cart-footer__info">
          {declOfNum(totalCount, ['товар', 'товара', 'товаров'])}
          <span>{totalPrice} ₽</span>
        </div>
        <div className="cart-footer__info">
          <span>
            Начислим додокоины
            <button className="info-button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM8 15A7 7 0 108 1a7 7 0 000 14z"
                  fill="#000"></path>
                <path
                  d="M8 6a1 1 0 100-2 1 1 0 000 2zM8.75 7.757a.75.75 0 00-1.5 0v3.486a.75.75 0 001.5 0V7.757z"
                  fill="#000"></path>
              </svg>
            </button>
          </span>
          <span>
            +32
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={14}
              height={14}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5.75c.41 0 .75.34.75.75V3h.25a5 5 0 010 10h-.25v1.5a.75.75 0 01-1.5 0V13H4.07c-.38 0-.56 0-.7-.07a.67.67 0 01-.3-.3C3 12.5 3 12.32 3 11.94V4.07c0-.38 0-.56.07-.7a.67.67 0 01.3-.3C3.5 3 3.68 3 4.06 3h2.68V1.5c0-.41.34-.75.75-.75zm-3 10.75h4a3.5 3.5 0 100-7h-4v7z"
                fill="#000"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="cart-footer__total">
        <div className="cart-footer__info price">
          <p>Сумма заказа</p>
          <span>{totalPrice} ₽</span>
        </div>
        <button className="cart-footer__btn">
          К оформлению заказа
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 18l6-6-6-6"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export { CartFooter };
