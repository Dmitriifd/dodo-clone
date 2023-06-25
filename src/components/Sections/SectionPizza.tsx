import { useEffect, useState } from 'react';
import { useGetProductsQuery } from 'redux/api/productsApi';

import { ProductCard } from 'components/ProductCard';
import { Skeleton } from 'components/Skeleton/Skeleton';
import { SkeletonMobile } from 'components/Skeleton/SkeletonMobile';

const SectionPizza = () => {
  const { data: pizza = [], isLoading } = useGetProductsQuery();
  const skeletonArray = Array.from({ length: 12 }, (_, i) => i);

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

  const isMobile = windowWidth < 870;

  return (
    <section className="pizza section" id="pizza">
      <div className="pizza__container">
        <h2 className="pizza__title title">Пицца</h2>
        <div className="pizza__wrapper grid-wrapper">
          {isMobile && isLoading
            ? skeletonArray.map((index) => <SkeletonMobile key={index} />)
            : pizza.map((item) => <ProductCard key={item.id} item={item} />)}
          {!isMobile && isLoading
            ? skeletonArray.map((index) => <Skeleton key={index} />)
            : pizza.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export { SectionPizza };
