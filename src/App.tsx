import { Header } from 'components/Header';
import { PopularSlider } from 'components/PopularSlider';
import { StoriesSlider } from 'components/StoriesSlider';

function App() {
  return (
    <>
      <Header />
      <StoriesSlider />
      <PopularSlider />
    </>
  );
}

export default App;
