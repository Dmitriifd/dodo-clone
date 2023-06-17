import { ProductCard } from 'components/ProductCard';
import { useGetComboQuery } from 'redux/api/productsApi';

const SectionCombo = () => {
const { data: combo = [] } = useGetComboQuery('');

  return (
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
  );
};

export { SectionCombo };
