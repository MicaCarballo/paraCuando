// Images
import tournamentsImage from '../public/tournamentsImage.png';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import Categories from '../components/Categories';
import Component1 from '../components/Component1';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import Title1 from '../components/Texts/Title1';

export default function Tournaments() {
  return (
    <Layout>
      <header className="relative ">
        <Image
          src={tournamentsImage}
          alt=""
          priority={true}
          placeholder={'blur'}
          className="object-cover w-full h-[204px] absolute -z-10 object-center brightness-50 md:brightness-100"
        />
        <div className="max-w-7xl mx-auto h-[204px] flex flex-col justify-center gap-1 items-start p-5 lg:pl-[170px]">
          <h4 className="h500-normal--16px text-white">Home / Marcas</h4>
          <Title1>Torneos y eventos</Title1>
          <p className="text-white h500-normal--16px leading-[18px]">
            Descubre las marcas y tiendas que la gente quiere cerca
          </p>
        </div>
      </header>

      <main className="lg:mx-auto lg:px-[170px] max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row lg:items-end">
          <div className="px-5 pt-5 lg:pt-11 min-[1200px]:px-0 flex justify-center gap-2">
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
          <SearchBar className="flex sm:max-w-xs mx-auto mt-5 lg:ml-auto lg:mr-0" />
        </div>
        {/* POPULARES */}
        <section className="px-5 min-[1200px]:px-0 my-14">
          <h2 className="h500-normal--24px pb-1">Populares en Querétaro</h2>
          <p className="h400-normal--16px pb-5">
            Lo que las personas piden más
          </p>
          {/* <Slider /> */}
        </section>
        {/* SUGERENCIAS */}
        <section className="px-5 min-[1200px]:px-0 my-14">
          <h2 className="h500-normal--24px pb-1">Sugerencias para ti</h2>
          <p className="h400-normal--16px pb-5">
            Publicaciones que podrías colaborar
          </p>
          {/* <Slider /> */}
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
          {/* <Slider /> */}
        </section>
      </main>
    </Layout>
  );
}
