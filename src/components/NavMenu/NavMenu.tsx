import { Link } from 'react-scroll';
import { ReactComponent as ArrowButton } from 'assets/img/arrow-button.svg';
import { ReactComponent as Logo } from 'assets/img/pizza.svg';
// import { ReactComponent as GeoIcon } from 'assets/img/geo.svg';
// import { ReactComponent as PhoneIcon } from 'assets/img/phone-icon.svg';
// import { ReactComponent as GoogleIcon } from 'assets/img/google-play-icon.svg';
import clsx from 'clsx';
import './NavMenu.scss';

const NavMenu = ({ inView, isOpen, toggleCart }: any) => {
  return (
    <nav
      className={clsx('header__menu', { fixed: !inView, active: isOpen })}>
      <div className="header__menu-container">
        {/* <a href="#" className="header__menu-city grid">
          <GeoIcon />
          <p>Москва</p>
          <span>Изменить</span>
        </a> */}
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
        {/* <a href="#" className="header__menu-phone grid">
          <PhoneIcon width={22} height={22} />
          <p>8 800 300-00-00</p>
          <span>Звонок бесплатный</span>
        </a>
        <a href="#" className="header__menu-mobile">
          <GoogleIcon />
        </a> */}
        <button className="header__basket-btn btn" onClick={toggleCart}>
          Корзина
          <div className="divider"></div>
          <div className="quantity">2</div>
          <ArrowButton className="btn-arrow" />
        </button>
      </div>
    </nav>
  );
};

export { NavMenu };
