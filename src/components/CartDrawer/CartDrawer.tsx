import clsx from 'clsx';
import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import { useEffect, useState } from 'react';
import './CartDrawer.scss';
import { EmptyCart } from './EmptyCart';

const CartDrawer = ({ isOpenCart, toggleCart }: any) => {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (isOpenCart) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isOpenCart]);

  return (
    <div
      className={clsx('drawer-overlay', { active: isOpenCart })}
      onClick={toggleCart}>
      <div
        className={clsx('drawer__wrapper', { active: isOpenCart })}
        onClick={(e) => e.stopPropagation()}>
        {isOpenCart && (
          <button className="drawer__button" onClick={toggleCart}>
            <CloseIcon />
          </button>
        )}
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="drawer__content">
            <div className="drawer__header"></div>
            <div className="drawer__body"></div>
            <div className="drawer__footer"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export { CartDrawer };
