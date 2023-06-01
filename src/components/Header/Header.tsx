import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { ReactComponent as Star } from 'assets/img/star.svg';
import { ReactComponent as Coin } from 'assets/img/dodocoin.svg';
import { ReactComponent as ArrowButton } from 'assets/img/arrow-button.svg';
import { ReactComponent as Logo } from 'assets/img/pizza.svg';
import logo from 'assets/img/pizza.svg';
import './Header.scss';

const Header = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top" ref={ref}>
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
          </div>
        </div>
      </div>
      <nav className={clsx('header__menu', { fixed: !inView })}>
        <div className="header__menu-container">
          <div className="header__menu-wrapper">
            <Logo width={32} height={32} className="header__menu-logo" />
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  Пицца
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  Комбо
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  Закуски
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  Десерты
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  Напитки
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  Акции
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  Контакты
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  О нас
                </a>
              </li>
            </ul>
          </div>
          <button className="header__basket-btn btn">
            Корзина
            <div className="divider"></div>
            <div className="quantity">2</div>
            <ArrowButton className="btn-arrow" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Header };
