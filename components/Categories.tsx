import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTags } from '../lib/services/tags.services';
import styles from '../styles/categories-swiper.module.css';
import Component1 from './Component1';

const Categories = () => {
  const { data: tags } = useTags();

  return (
    <div>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 'auto',
            enabled: true,
            grabCursor: true,
          },
          770: {
            normalizeSlideIndex: true,
            grabCursor: true,
          },
        }}
        spaceBetween={10}
        slidesPerView={'auto'}
        direction={'horizontal'}
        resistance={false}
      >
        {/* <SwiperSlide className={styles.slide1}>
          <Component1 text="Artistas mexicanos" />
        </SwiperSlide> */}
        {tags?.map((tag) => (
          <SwiperSlide key={tag.id} className={styles.slide1}>
            <Component1 text={tag.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href={'/categories'} className="py-4 block text-primaryblue w-max">
        Ver todos los intereses
      </Link>
    </div>
  );
};
export default Categories;
