// Images
import artistImage from '../../public/artistsImage.png';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'swiper/css';
import Categories from '../../components/Categories';
import Component1 from '../../components/Component1';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';
import Slider from '../../components/Slider/Slider';
import Title1 from '../../components/Texts/Title1';
import { useCategories } from '../../lib/services/categories.services';
import { usePublications } from '../../lib/services/publications.services';

export default function Category() {
  const { data: publications } = usePublications();
  const { data: categories } = useCategories();
  const router = useRouter();
  const { category_id } = router.query;

  const category = categories?.find((category) => category.id == category_id);

  return (
    <Layout>
      <header className="relative ">
        <Image
          src={artistImage}
          alt=""
          priority={true}
          placeholder={'blur'}
          className="object-cover w-full h-[204px] absolute -z-10 object-center brightness-50 md:brightness-100"
        />
        <div className="max-w-7xl mx-auto h-[204px] flex flex-col justify-center gap-1 items-start p-5 lg:pl-[170px]">
          <h4 className="h500-normal--16px text-white">Home / Marcas</h4>
          <Title1>{category && category.name}</Title1>
          <p className="text-white h500-normal--16px leading-[18px]">
            {category && category.description}
          </p>
        </div>
      </header>
      <main className="lg:mx-auto lg:px-[170px] max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row lg:items-end">
          <div className="px-5 pt-5 lg:pt-11 min-[1200px]:px-0 flex justify-center gap-2">
            {categories?.map((category) => (
              <Link href={`/category/${category.id}`} key={category.id}>
                <Component1 text={category.name} />
              </Link>
            ))}
          </div>
          <SearchBar className="flex sm:max-w-xs mx-auto mt-5 lg:ml-auto lg:mr-0" />
        </div>
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

// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://paracuando-team1.academlo.tech/api/v1/publications-types`
//   );
//   const categories = await res.json();

//   const paths = categories?.map((category: any) => {
//     return {
//       params: { category_id: +category.id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   const res = await fetch(
//     `https://paracuando-team1.academlo.tech/api/v1/publications-types/${params.category_id}`
//   );
//   const category = JSON.stringify(res);

//   return {
//     props: {
//       category,
//     },
//   };
// }
