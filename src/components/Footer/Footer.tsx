import { ReactComponent as SecretIcon } from 'assets/img/secret.svg';
import { ReactComponent as OkIcon } from 'assets/img/ok.svg';
import { ReactComponent as VkIcon } from 'assets/img/vk.svg';
import { ReactComponent as YoutubeIcon } from 'assets/img/youtube.svg';
import { ReactComponent as AppStoreBanner } from 'assets/img/app-store.svg';
import { ReactComponent as GooglePlayBanner } from 'assets/img/app-google.svg';
import { ReactComponent as AppGalleryBanner } from 'assets/img/app-gallery.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__secret">
        <div className="footer__container flex">
          <SecretIcon />
          <span>Стань тайным покупателем</span>
          <span>Додо Пиццы и получи пиццу в подарок</span>
          <a href="#" className="footer__secret-btn">
            Заполнить анкету
          </a>
          <a href="#" className="footer__secret-btn-mobile">
            Стань тайным покупателем <i>❯</i>
          </a>
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__menu-column">
            <h3 className="footer__menu-title">Додо Пицца</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  О нас
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Додо-книга
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Блог «Сила ума»
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Додо ИС
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-column">
            <h3 className="footer__menu-title">Работа</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  В пицерии
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-column">
            <h3 className="footer__menu-title">Партнерам</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Франшиза
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Инвестиции
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Поставщикам
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Предложить помещение
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-column">
            <h3 className="footer__menu-title">Это интересно</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Почему мы готовим без перчаток?
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Экскурсии и мастер-классы
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Корпоративные заказы
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__app-banners">
            <div>
              <AppStoreBanner />
            </div>
            <div>
              <GooglePlayBanner />
            </div>
            <div>
              <AppGalleryBanner />
            </div>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__stats">
            <p>452 315 655 ₽</p>
            <span>
              Выручка российской сети в этом месяце. В прошлом — 5 916 535 622 ₽
            </span>
          </div>
          <div className="footer__stats">
            <p>924 пиццерии</p>
            <span>в 17 странах, от Великобритании до Нигерии Выручка</span>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">ДОДО PIZZA © 2023</div>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">
              Правовая информация
            </a>
            <a href="#" className="footer__bottom-link">
              Калорийность и состав
            </a>
            <a href="#" className="footer__bottom-link">
              Помощь
            </a>
          </div>
          <div className="footer__social">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <OkIcon />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <VkIcon />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <YoutubeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
