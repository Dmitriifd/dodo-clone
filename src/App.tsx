import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { PopularSlider } from 'components/PopularSlider';
import { ProductCard } from 'components/ProductCard';
import { StickyCart } from 'components/StickyCart';
import { StoriesSlider } from 'components/StoriesSlider';

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
  },
  {
    id: 5,
    title: 'Пепперони фреш',
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
    price: '289 ₽',
    img: 'assets/pizza/1.png'
  }
];

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <StoriesSlider />
        <PopularSlider />
        <section className="pizza">
          <div className="pizza__container">
            <h2 className="pizza__title title">Пицца</h2>
            <div className="pizza__wrapper grid-wrapper">
              {tempData.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <StickyCart />
      <Footer />
    </>
  );
}

export default App;
