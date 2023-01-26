import paraCuandoLogoFull from '../public/paraCuandoLogoFull.svg';

import Layout from '../components/Layout';

// Import Swiper styles
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import Categories from '../components/Categories';
import Component1 from '../components/Component1';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider/Slider';

export default function Index() {
  return (
    <Layout
      title="Para Cuándo?"
      description="Sección principal de Para Cuándo?"
    >
      <div className="relative">
        <div className="w-full h-[488px] bg-homeImageMobile sm:bg-homeImage bg-cover bg-no-repeat">
          <div className="flex flex-col gap-8 items-center justify-start pt-16">
            <Image
              src={paraCuandoLogoFull}
              alt="logo"
              width={0}
              height={0}
              style={{ width: '214px', height: '190px' }}
            />
            <SearchBar className="max-w-md" />
            <div className="flex gap-2">
              <Link href={'/brands'}>
                <Component1 text="Marcas y tiendas" />
              </Link>
              <Link href={'/artists'}>
                <Component1 text="Artistas y Conciertos" />
              </Link>
              <Link href={'/tournaments'}>
                <Component1 text="Torneos" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <main className="lg:mx-[170px]">
        {/* POPULARES */}
        <section className="px-5 min-[1200px]:px-0 my-14">
          <h2 className="h500-normal--24px pb-1">Populares en Querétaro</h2>
          <p className="h400-normal--16px pb-5">
            Lo que las personas piden más
          </p>
          <Slider />
        </section>

        {/* SUGERENCIAS */}
        <section className="px-5 min-[1200px]:px-0 my-14">
          <h2 className="h500-normal--24px pb-1">Sugerencias para ti</h2>
          <p className="h400-normal--16px pb-5">
            Publicaciones que podrías colaborar
          </p>
          <Slider />
        </section>

        {/* CATEGORIAS */}
        <section className="my-14 w-full relative px-5 py-6 mb-16 bg-primarygrayLighter min-[800px]:px-10">
          <h2 className="h500-normal--24px pb-1">¡Hagámoslo más personal!</h2>
          <p className="h400-normal--16px pb-5">
            Selecciona tus interes para brindarte sugerencia de acuerdo a tus
            gustos
          </p>
          <Categories />
        </section>

        {/* RECIENTES */}
        <section className="px-5 min-[1200px]:px-0 my-14">
          <h2 className="h500-normal--24px">Recientes</h2>
          <p className="h400-normal--16px pb-5">
            Las personas últimamente están hablando de esto
          </p>
          <Slider />
        </section>
      </main>
    </Layout>
  );
}
