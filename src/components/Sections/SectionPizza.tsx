import { ProductCard } from 'components/ProductCard';
import { useGetProductsQuery } from 'redux/api/productsApi';

const SectionPizza = () => {
  const { data: pizza = [], isLoading } = useGetProductsQuery('');

  return (
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
  );
};

export { SectionPizza };
