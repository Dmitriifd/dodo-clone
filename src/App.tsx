import { Cart } from 'components/Cart';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { NavMenu } from 'components/NavMenu';
import { PopularSlider } from 'components/PopularSlider';
import { ProductCard } from 'components/ProductCard';
import { StickyCart } from 'components/StickyCart';
import { StoriesSlider } from 'components/StoriesSlider';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetComboQuery, useGetDesertsQuery, useGetDrinksQuery, useGetProductsQuery, useGetSnacksQuery } from 'redux/api/productsApi';
import { Toaster } from 'react-hot-toast';

function App() {
  const { ref, inView } = useInView({ threshold: 1, initialInView: true });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data: pizza = [], isLoading } = useGetProductsQuery('');
  const { data: combo = [] } = useGetComboQuery('');
  const { data: snacks = [] } = useGetSnacksQuery('');
  const { data: deserts = [] } = useGetDesertsQuery('');
  const { data: drinks = [] } = useGetDrinksQuery('');

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

  return (
    <>
      <Header ref1={ref} isMobile={isMobile} />

      {!isMobile && <NavMenu inView={inView} />}
      <Toaster position="top-right" />
      <main className="main">
        <StoriesSlider />
        <PopularSlider />

        <div className="mobile-nav" ref={isMobile ? ref : null}>
          {isMobile && <NavMenu inView={inView} />}
        </div>

        <section className="pizza section" id="pizza">
          <div className="pizza__container">
            <h2 className="pizza__title title">Пицца</h2>
            <div className="pizza__wrapper grid-wrapper">
              {pizza.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
        <section className="combo section" id="combo">
          <div className="combo__container">
            <h2 className="combo__title title">Комбо</h2>
            <div className="combo__wrapper grid-wrapper">
              {combo.map((item: any) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
        <section className="snacks section" id="snacks">
          <div className="snacks__container">
            <h2 className="snacks__title title">Закуски</h2>
            <div className="snacks__wrapper grid-wrapper">
              {snacks.map((item: any) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
        <section className="desserts section" id="desserts">
          <div className="desserts__container">
            <h2 className="desserts__title title">Десерты</h2>
            <div className="desserts__wrapper grid-wrapper">
              {deserts.map((item: any) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
        <section className="drinks section" id="drinks">
          <div className="drinks__container">
            <h2 className="drinks__title title">Напитки</h2>
            <div className="drinks__wrapper grid-wrapper">
              {drinks.map((item: any) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <StickyCart />
      <Footer />
      <Cart />
    </>
  );
}

export default App;
