import { useEffect, useState, LegacyRef } from 'react';
import { clsx } from 'clsx';
import { ReactComponent as Star } from 'assets/img/star.svg';
import { ReactComponent as Coin } from 'assets/img/dodocoin.svg';
import { ReactComponent as Burger } from 'assets/img/burger-icon.svg';
import { ReactComponent as BurgerClose } from 'assets/img/burger-icon-close.svg';
import { ReactComponent as GeoIcon } from 'assets/img/geo.svg';
import { ReactComponent as PhoneIcon } from 'assets/img/phone-icon.svg';
import { ReactComponent as GoogleIcon } from 'assets/img/google-play-icon.svg';
import logo from 'assets/img/pizza.svg';
import { useLockedBody } from 'usehooks-ts';
import './Header.scss';

interface HeAderProps {
  ref1: LegacyRef<HTMLDivElement>;
  isMobile: boolean;
}

const Header = ({ ref1, isMobile }: HeAderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locked, setLocked] = useLockedBody(false, 'root');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setLocked(!locked);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top" ref={!isMobile ? ref1 : null}>
          <div className="header__logo">
            <a href="#" className="header__logo-link">
              <div className="header__logo-img">
                <img src={logo} alt="logotype" width={45} height={45} />
              </div>
              <div className="header__logo-text">
                <p>ДОДО PIZZA</p>
                <span>Сеть пиццерий № 1 в России</span>
              </div>
            </a>
            <div className="header__info">
              <p>Доставка пиццы</p>
              <a href="#" className="header__info-link">
                Москва
              </a>
              <div>
                35 мин
                <div className="dot"></div>
                4.77
                <Star />
              </div>
            </div>
          </div>
          <div className="header__actions">
            <a href="#" className="header__coin-link">
              <Coin className="header__coin" width={28} height={28} />
              <span>Додокоины</span>
            </a>
            <button className="header__auth-btn btn">Войти</button>
            <button className="header__burger">
              <Burger width={32} height={32} onClick={toggleMenu} />
            </button>
          </div>
        </div>
      </div>
      <div className={clsx('header-menu', { active: isOpen })}>
        <div className="header-menu__top">
          <div>
            <img src={logo} alt="logo" height={26} />
            ДОДО PIZZA
          </div>
          <button>
            <BurgerClose onClick={toggleMenu} />
          </button>
        </div>
        <div className="header-menu__info">
          <a href="#" className="header__menu-city grid">
            <GeoIcon />
            <p>Москва</p>
            <span>Изменить</span>
          </a>
          <p className="header-menu__desc">
            35 МИН{' '}
            <span>
              4.8 <Star />
            </span>
          </p>
        </div>
        <ul className="header-menu__list">
          <li className="header-menu__item">
            <a href="#">Войти</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Додокоины</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Персональные акции</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Акции</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Работа в Dodo</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Франшиза</a>
          </li>
          <li className="header-menu__item">
            <a href="#">О нас</a>
          </li>
        </ul>
        <div className="header-menu__footer">
          <a href="#" className="header__menu-phone grid">
            <PhoneIcon width={22} height={22} />
            <p>8 800 300-00-00</p>
            <span>Звонок бесплатный</span>
          </a>
          <a href="#" className="header__menu-mobile">
            <GoogleIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export { Header };
