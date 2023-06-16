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
import { useGetProductsQuery } from 'redux/api/productsApi';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const { ref, inView } = useInView({ threshold: 1, initialInView: true });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data = [], isLoading } = useGetProductsQuery('');

  const notify = ({ title, diameter }: { title: string; diameter: number }) =>
    toast(
      `Добавлено:
      ${title} ${diameter} см
    `,
      {
        icon: '🍕',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '15px',
        }
      }
    );

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

      <Toaster
        position="top-right"
        containerStyle={{
          top: 80,
          right: 300
        }}
      />

      {!isMobile && <NavMenu inView={inView} />}

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
              {data.map((item) => (
                <ProductCard key={item.id} item={item} notify={notify} />
              ))}
            </div>
          </div>
        </section>
        {/* <section className="combo section" id="combo">
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
        </section> */}
      </main>
      <StickyCart />
      <Footer />
      <Cart />
    </>
  );
}

export default App;
