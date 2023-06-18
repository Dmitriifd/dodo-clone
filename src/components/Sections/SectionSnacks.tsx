import { useGetSnacksQuery } from 'redux/api/productsApi';

import { ProductCard } from 'components/ProductCard';

const SectionSnacks = () => {
  const { data: snacks = [] } = useGetSnacksQuery();

  return (
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
  );
};

export { SectionSnacks };
