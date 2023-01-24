// Images
import sliderImg1 from '../../public/sliderImg.png';
import sliderImg2 from '../../public/sliderImg2.png';
import sliderImg3 from '../../public/sliderImg3.png';

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderContent from './SliderContent';

const Slider = () => {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        breakpoints={{
          // when window width is >= 400px
          200: {
            width: 320,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 2,
          },
          768: {
            width: 940,
            slidesPerView: 3,
          },
        }}
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SliderContent
            img={sliderImg1}
            text="El concierto con la temática de Lady gaga en Las Vegas. El concierto con la temática de Lady gaga en Las Vegas.El concierto con la temática."
            titleEvent="Concierto de Lady Gaga"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            img={sliderImg2}
            text="Tienda de ropa"
            titleEvent="Tienda de ropa femenina ZARA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            img={sliderImg3}
            text="Grupo musical coreano"
            titleEvent="Concierto de BTS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            img={sliderImg3}
            text="Grupo musical coreano"
            titleEvent="Concierto de BTS"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
