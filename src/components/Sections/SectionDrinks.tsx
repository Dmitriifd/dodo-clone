import { ProductCard } from 'components/ProductCard';
import { useGetDrinksQuery } from 'redux/api/productsApi';

const SectionDrinks = () => {
  const { data: drinks = [] } = useGetDrinksQuery();

  return (
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
  );
};

export { SectionDrinks };
