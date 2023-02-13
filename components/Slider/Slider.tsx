// Images

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Publication } from '../../lib/interfaces/publications.interface';
import SliderButtons from './SliderButtons';
import SliderContent from './SliderContent';

interface Props {
  publications: Publication[];
}

const Slider = ({ publications }: Props) => {
  return (
    <div className="relative">
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
            allowTouchMove: true,
            grabCursor: true,
          },
          1200: {
            width: 940,
          },
        }}
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={22}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        allowTouchMove={true}
        grabCursor={true}
      >
        <SliderButtons back next />

        {publications?.map((publication) => (
          <SwiperSlide key={publication.id}>
            <SliderContent
              img={publication.image_url || '/sliderImg.png'}
              linkToEvent={publication.content}
              text={publication.description}
              titleEvent={publication.title}
              event_id={publication.id}
              votesCount={publication.votes_count}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
