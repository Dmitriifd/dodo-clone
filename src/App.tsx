import { Cart } from 'components/Cart';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { NavMenu } from 'components/NavMenu';
import { PopularSlider } from 'components/PopularSlider';
import { StickyCart } from 'components/StickyCart';
import { StoriesSlider } from 'components/StoriesSlider';
import { useInView } from 'react-intersection-observer';
import { Toaster } from 'react-hot-toast';
import { Modal } from 'components/Modal';
import { useState, useEffect } from 'react';
import {
  SectionCombo,
  SectionDeserts,
  SectionDrinks,
  SectionPizza,
  SectionSnacks
} from 'components/Sections';
import { useAppSelector } from 'redux/store';

function App() {
  const { ref, inView } = useInView({ threshold: 1, initialInView: true });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const selectedProduct = useAppSelector(
    (state) => state.modal.selectedProduct
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
      {!isMobile && <NavMenu inView={inView} />}
      <Toaster position="top-right" />

      <main className="main">
        <StoriesSlider />
        <PopularSlider />

        <div className="mobile-nav" ref={isMobile ? ref : null}>
          {isMobile && <NavMenu inView={inView} />}
        </div>

        <SectionPizza />
        <SectionCombo />
        <SectionSnacks />
        <SectionDeserts />
        <SectionDrinks />
      </main>
      {selectedProduct && <Modal product={selectedProduct} />}
      <StickyCart />
      <Footer />
      <Cart />
    </>
  );
}

export default App;
