import { CartDrawer } from 'components/CartDrawer';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { NavMenu } from 'components/NavMenu';
import { PopularSlider } from 'components/PopularSlider';
import { ProductCard } from 'components/ProductCard';
import { StickyCart } from 'components/StickyCart';
import { StoriesSlider } from 'components/StoriesSlider';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const tempData = [
  {
    id: 1,
    title: 'Пепперони фреш',
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
    price: '289 ₽',
    img: 'assets/pizza/1.png'
  },
  {
    id: 2,
    title: 'Пепперони фреш',
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
    price: '289 ₽',
    img: 'assets/pizza/1.png'
  },
  {
    id: 3,
    title: 'Пепперони фреш',
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
    price: '289 ₽',
    img: 'assets/pizza/1.png'
  },
  {
    id: 4,
    title: 'Пепперони фреш',
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
    price: '289 ₽',
    img: 'assets/pizza/1.png'
  }
];

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 1, initialInView: true });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 992;

  const toggleCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        ref1={ref}
        isMobile={isMobile}
      />

      {!isMobile && (
        <NavMenu inView={inView} isOpen={isOpen} toggleCart={toggleCart} />
      )}

      <main className="main">
        <StoriesSlider />
        <PopularSlider />

        <div className="mobile-nav" ref={isMobile ? ref : null}>
          {isMobile && (
            <NavMenu inView={inView} isOpen={isOpen} toggleCart={toggleCart} />
          )}
        </div>

        <section className="pizza section" id="pizza">
          <div className="pizza__container">
            <h2 className="pizza__title title">Пицца</h2>
            <div className="pizza__wrapper grid-wrapper">
              {tempData.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section className="combo section" id="combo">
          <div className="combo__container">
            <h2 className="combo__title title">Комбо</h2>
            <div className="combo__wrapper grid-wrapper">
              {tempData.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section className="snacks section" id="snacks">
          <div className="snacks__container">
            <h2 className="snacks__title title">Закуски</h2>
            <div className="snacks__wrapper grid-wrapper">
              {tempData.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section className="desserts section" id="desserts">
          <div className="desserts__container">
            <h2 className="desserts__title title">Десерты</h2>
            <div className="desserts__wrapper grid-wrapper">
              {tempData.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section className="drinks section" id="drinks">
          <div className="drinks__container">
            <h2 className="drinks__title title">Напитки</h2>
            <div className="drinks__wrapper grid-wrapper">
              {tempData.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <StickyCart toggleCart={toggleCart} />
      <Footer />
      <CartDrawer isOpenCart={isOpenCart} toggleCart={toggleCart} />
    </>
  );
}

export default App;
