import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/categories-swiper.module.css';
import Component1 from './Component1';

const Categories = () => {
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
            enabled: false,
            normalizeSlideIndex: true,
            grabCursor: false,
          },
        }}
        spaceBetween={10}
        slidesPerView={'auto'}
        direction={'horizontal'}
        resistance={false}
      >
        <SwiperSlide className={styles.slide1}>
          <Component1 text="Artistas mexicanos" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide2}>
          <Component1 text="Tiendas de ropa" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide3}>
          <Component1 text="Rock" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide4}>
          <Component1 text="Restaurantes" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide5}>
          <Component1 text="Restaurantes" />
        </SwiperSlide>
      </Swiper>
      <Link href={'/categories'} className="py-4 block text-primaryblue w-max">
        Ver todos los intereses
      </Link>
    </div>
  );
};
export default Categories;
