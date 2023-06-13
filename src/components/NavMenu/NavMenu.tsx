import { Link } from 'react-scroll';
import { ReactComponent as ArrowButton } from 'assets/img/arrow-button.svg';
import { ReactComponent as Logo } from 'assets/img/pizza.svg';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { openCart, selectTotalItems } from 'redux/cart/slice';
import './NavMenu.scss';

interface NavMenuProps {
  inView: boolean;
}

const NavMenu = ({ inView }: NavMenuProps) => {
  const dispatch = useAppDispatch();

   const totalItems = useAppSelector(selectTotalItems);

  return (
    <nav className={clsx('header__menu', { fixed: !inView })}>
      <div className="header__menu-container">
        <div className="header__menu-wrapper">
          <Logo width={32} height={32} className="header__menu-logo" />
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link
                to="pizza"
                offset={-100}
                smooth={true}
                spy={true}
                duration={500}
                className="header__menu-link"
                activeClass="active">
                Пицца
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="combo"
                offset={-50}
                smooth={true}
                spy={true}
                duration={500}
                className="header__menu-link"
                activeClass="active">
                Комбо
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="snacks"
                offset={-50}
                smooth={true}
                spy={true}
                duration={500}
                className="header__menu-link"
                activeClass="active">
                Закуски
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="desserts"
                offset={-50}
                smooth={true}
                spy={true}
                duration={500}
                className="header__menu-link"
                activeClass="active">
                Десерты
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="drinks"
                offset={-50}
                smooth={true}
                spy={true}
                duration={500}
                className="header__menu-link"
                activeClass="active">
                Напитки
              </Link>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link promo">
                Акции
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link contacts">
                Контакты
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link about">
                О нас
              </a>
            </li>
          </ul>
        </div>
        <button
          className="header__basket-btn btn"
          onClick={() => dispatch(openCart())}>
          Корзина
          {!!totalItems && (
            <>
              <div className="divider"></div>
              <div className="quantity">{totalItems}</div>
              <ArrowButton className="btn-arrow" />
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export { NavMenu };
