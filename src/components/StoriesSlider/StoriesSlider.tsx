import { useRef, useState, memo } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './StoriesSlider.scss';

const sliderData = [
  { src: 'assets/stories/1.jpg', id: 1, alt: 'stories 1' },
  { src: 'assets/stories/2.jpg', id: 2, alt: 'stories 2' },
  { src: 'assets/stories/3.jpg', id: 3, alt: 'stories 3' },
  { src: 'assets/stories/4.jpg', id: 4, alt: 'stories 4' },
  { src: 'assets/stories/5.jpg', id: 5, alt: 'stories 5' },
  { src: 'assets/stories/6.jpg', id: 6, alt: 'stories 6' },
  { src: 'assets/stories/7.jpg', id: 7, alt: 'stories 7' },
  { src: 'assets/stories/8.jpg', id: 8, alt: 'stories 8' }
];

const breakpoints = {
  320: {
    slidesPerView: 3
  },
  480: {
    slidesPerView: 3.5
  },
  640: {
    slidesPerView: 4.5
  },
  768: {
    slidesPerView: 5
  },
  1024: {
    slidesPerView: 6
  }
};

const StoriesSlider = memo(() => {
  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="stories">
      <div className="stories__container">
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={6}
          spaceBetween={12}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          modules={[Navigation]}
          onInit={() => setInit(true)}
          className="mySwiper">
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="stories__slide-item">
                <img src={item.src} alt={item.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-navigation">
          <div ref={prevRef} className="slider-button slider-prev">
            <span>&#10094;</span>
          </div>
          <div ref={nextRef} className="slider-button slider-next">
            <span>&#10095;</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export { StoriesSlider };
