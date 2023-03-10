import { useState } from 'react';
import { useSwiper } from 'swiper/react';

interface Props {
  back: boolean;
  next: boolean;
}

export default function SliderButtons({ back, next }: Props) {
  const [hiddenBack, setHiddenBack] = useState(true);
  const [hiddenNext, setHiddenNext] = useState(false);

  const swiper = useSwiper();
  function backBtn() {
    if (swiper.isBeginning) {
      setHiddenBack(true);
    }
    setHiddenNext(false);
  }
  function nextBtn() {
    if (swiper.isEnd) {
      setHiddenNext(true);
    }
    setHiddenBack(false);
  }

  return (
    <div className="h-0">
      {back && (
        <button
          onClick={() => {
            swiper.slidePrev();
            backBtn();
          }}
          className={`${
            hiddenBack ? 'opacity-0 pointer-events-none' : 'block'
          } transition-opacity`}
        >
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-16 top-1/2 hidden lg:block hover:scale-105 transition-transform "
          >
            <path
              d="M29.5 44.25L32.1366 41.6817L21.8484 31.3437L44.25 31.3438V27.6562L21.8484 27.6562L32.1366 17.381L29.5 14.75L14.75 29.5L29.5 44.25Z"
              fill="#1B4DB1"
            />
            <path
              d="M29.5 3.68749C34.6052 3.68749 39.5958 5.20137 43.8406 8.03768C48.0855 10.874 51.3939 14.9054 53.3476 19.622C55.3013 24.3386 55.8125 29.5286 54.8165 34.5358C53.8205 39.5429 51.3621 44.1422 47.7522 47.7522C44.1422 51.3621 39.5429 53.8205 34.5358 54.8165C29.5286 55.8125 24.3386 55.3013 19.622 53.3476C14.9054 51.3939 10.874 48.0855 8.03768 43.8406C5.20137 39.5958 3.68749 34.6052 3.68749 29.5C3.6953 22.6565 6.41733 16.0955 11.2564 11.2564C16.0955 6.41733 22.6565 3.6953 29.5 3.68749ZM29.5 51.625C33.8759 51.625 38.1535 50.3274 41.792 47.8963C45.4304 45.4651 48.2662 42.0097 49.9408 37.9669C51.6154 33.924 52.0536 29.4754 51.1999 25.1836C50.3462 20.8918 48.239 16.9495 45.1447 13.8553C42.0505 10.761 38.1082 8.65382 33.8164 7.80012C29.5245 6.94642 25.0759 7.38457 21.0331 9.05915C16.9903 10.7337 13.5349 13.5696 11.1037 17.208C8.6726 20.8464 7.37499 25.1241 7.37499 29.5C7.38182 35.3658 9.71503 40.9894 13.8628 45.1372C18.0106 49.2849 23.6342 51.6182 29.5 51.625Z"
              fill="#1B4DB1"
            />
          </svg>
        </button>
      )}
      {next && (
        <button
          onClick={() => {
            swiper.slideNext();
            nextBtn();
          }}
          className={`${
            hiddenNext ? 'opacity-0 pointer-events-none' : 'block'
          } transition-opacity`}
        >
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-16 top-1/2 hidden lg:block hover:scale-105 transition-transform "
          >
            <path
              d="M29.5 14.75L26.8634 17.3183L37.1516 27.6562H14.75V31.3438H37.1516L26.8634 41.619L29.5 44.25L44.25 29.5L29.5 14.75Z"
              fill="#1B4DB1"
            />
            <path
              d="M29.5 55.3125C24.3948 55.3125 19.4042 53.7986 15.1594 50.9623C10.9145 48.126 7.60606 44.0946 5.65237 39.378C3.69868 34.6614 3.18751 29.4714 4.18349 24.4642C5.17947 19.4571 7.63787 14.8577 11.2478 11.2478C14.8578 7.63786 19.4571 5.17946 24.4642 4.18348C29.4714 3.1875 34.6614 3.69867 39.378 5.65236C44.0946 7.60604 48.126 10.9145 50.9623 15.1593C53.7986 19.4042 55.3125 24.3948 55.3125 29.5C55.3047 36.3435 52.5827 42.9045 47.7436 47.7436C42.9045 52.5827 36.3435 55.3047 29.5 55.3125ZM29.5 7.375C25.1241 7.375 20.8465 8.6726 17.208 11.1037C13.5696 13.5349 10.7338 16.9903 9.05918 21.0331C7.38459 25.0759 6.94644 29.5245 7.80014 33.8164C8.65384 38.1082 10.761 42.0505 13.8553 45.1447C16.9495 48.239 20.8918 50.3462 25.1836 51.1999C29.4755 52.0536 33.9241 51.6154 37.9669 49.9408C42.0097 48.2662 45.4651 45.4304 47.8963 41.792C50.3274 38.1535 51.625 33.8759 51.625 29.5C51.6182 23.6342 49.285 18.0106 45.1372 13.8628C40.9894 9.71504 35.3658 7.38183 29.5 7.375Z"
              fill="#1B4DB1"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
