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
import { useCategories } from '../lib/services/categories.services';
import { usePublications } from '../lib/services/publications.services';

export default function Index() {
  const { data: publications, error, isLoading } = usePublications();
  const { data: categories } = useCategories();
  console.log(publications);

  // if (isLoading) {
  //   return <div>Cargando . . .</div>;
  // }
  // if (error) {
  //   return <div>Ocurrió un error</div>;
  // }

  return (
    <Layout
      title="Para Cuándo?"
      description="Sección principal de Para Cuándo?"
      hideBar={false}
    >
      <div className="w-full h-[488px] bg-homeImageMobile sm:bg-homeImage bg-cover bg-no-repeat">
        <div className="relative">
          <div className="flex flex-col gap-8 items-center justify-start pt-16">
            <Image
              src={paraCuandoLogoFull}
              alt="logo"
              width={0}
              height={0}
              style={{ width: '214px', height: '190px' }}
            />
            <SearchBar className="flex max-w-md" />
            <div className="flex gap-2">
              {categories?.map((category) => (
                <Link href={`/category/${category.id}`} key={category.id}>
                  <Component1 text={category.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <main className="lg:mx-auto lg:px-[170px] max-w-7xl">
        {/* POPULARES */}
        <section className="px-5 min-[1200px]:px-0 my-14">
          <h2 className="h500-normal--24px pb-1">Populares en Querétaro</h2>
          <p className="h400-normal--16px pb-5">
            Lo que las personas piden más
          </p>
          <Slider publications={publications?.results || []} />
        </section>

        {/* SUGERENCIAS */}
        <section className="px-5 min-[1200px]:px-0 my-14">
          <h2 className="h500-normal--24px pb-1">Sugerencias para ti</h2>
          <p className="h400-normal--16px pb-5">
            Publicaciones que podrías colaborar
          </p>
          <Slider publications={publications?.results || []} />
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
          <Slider publications={publications?.results || []} />
        </section>
      </main>
    </Layout>
  );
}
