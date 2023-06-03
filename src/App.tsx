import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { PopularSlider } from 'components/PopularSlider';
import { StoriesSlider } from 'components/StoriesSlider';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <StoriesSlider />
        <PopularSlider />
      </main>
      <Footer />
    </>
  );
}

export default App;
