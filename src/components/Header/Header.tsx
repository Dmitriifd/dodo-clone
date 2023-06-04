import { useEffect } from 'react';
import { clsx } from 'clsx';
import { ReactComponent as Star } from 'assets/img/star.svg';
import { ReactComponent as Coin } from 'assets/img/dodocoin.svg';
import { ReactComponent as Burger } from 'assets/img/burger-icon.svg';
import { ReactComponent as BurgerClose } from 'assets/img/burger-icon-close.svg';
import logo from 'assets/img/pizza.svg';
import './Header.scss';

const Header = ({ ref1, isOpen, setIsOpen, isMobile }: any) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <header
      className={clsx('header', {
        active: isOpen
      })}>
      <div className="header__container">
        <div className="header__top" ref={!isMobile ? ref1 : null}>
          <div className="header__logo">
            <a href="#" className="header__logo-link">
              <div className="header__logo-img">
                <img src={logo} alt="logotype" width={45} height={45} />
              </div>
              <div
                className={clsx('header__logo-text', {
                  active: isOpen
                })}>
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
              {isOpen ? (
                <BurgerClose width={32} height={32} />
              ) : (
                <Burger width={32} height={32} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
