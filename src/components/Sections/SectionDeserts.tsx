import { ProductCard } from 'components/ProductCard';
import { useGetDesertsQuery } from 'redux/api/productsApi';

const SectionDeserts = () => {
  const { data: deserts = [] } = useGetDesertsQuery();

  return (
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
  );
};

export { SectionDeserts };
