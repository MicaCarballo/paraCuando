import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useCategories } from '../lib/services/categories.services';
import { useTags } from '../lib/services/tags.services';
import { createPublication } from '../lib/services/user.services';
import addIcon from '../public/addIcon.png';

type Inputs = {
  title: string;
  tags: string;
  idPublicationType: string;
  description: string;
  urlShare: string;
};

export default function Post() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const router = useRouter();

  const { data: tags } = useTags();
  const { data: categories } = useCategories();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await createPublication(data)
      .then(() => {
        Swal.fire({
          title: 'Piola!',
          text: 'Se ha creado la publicación',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
        router.push('/profile');
      })
      .catch((err) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡Algo salió mal!',
        })
      );
  };

  const [stepForm, setstepForm] = useState(0);

  const completeFormStep = () => {
    setstepForm((cur) => cur + 1);
  };
  const returnStep = () => {
    if (stepForm > 0) {
      setstepForm((cur) => cur - 1);
    }
  };

  return (
    <div className=" with-screen h-screen md:grid grid-cols-[1fr_4fr] ">
      <div className=" h-[320px] w-full bg-primaryblue flex flex-col justify-around items-start md:h-screen md:w-full">
        <Link href="/" className="flex flex-col relative mt-20 mx-auto">
          <Image
            width={137}
            height={123}
            src="/paraCuandoCreatePubl.svg"
            alt="aaa"
            className="bg-center self-center"
            priority={true}
          />
          <Image
            width={144}
            height={32}
            src="/paraCuandoCreatePubl2.svg"
            alt="aaa"
            className="absolute -bottom-4"
            priority={true}
          />
        </Link>

        <div className="flex flex-col p-7">
          <h3 className="mt-3 text-primaryyellow h500-normal--24px">
            ¡Bienvenido, creador!
          </h3>
          <p className="pt-4 pb-4 text-white">
            A continuación puedes completar la info de la marca, artista o
            torneo que quieres cerca.
          </p>
        </div>
        <Link href="/help" className="hidden md:block text-white mt-10 ml-7">
          Ayuda
        </Link>
      </div>
      <div className="sm:w-full h-screen flex flex-col mx-auto my-auto relative">
        <button
          className="m-5 md:m-0 md:absolute top-14 left-14 text-primaryblue text-xl w-10"
          onClick={stepForm != 0 ? returnStep : () => router.back()}
        >
          Back
        </button>
        <div className="md:w-3/4 xl:w-3/5 md:mx-auto flex flex-col justify-center md:h-screen">
          <div className=" w-11/12 md:w-full h-3 bg-primarygrayLight self-center rounded-md mt-3 mb-9 md:mb-16 mx-24 ">
            <div
              className={`${
                stepForm === 0 ? 'w-3/5' : 'w-full'
              } transition-[width] h-3 bg-primaryblue rounded-md`}
            ></div>
          </div>
          <div className="mx-4">
            <h2 className="my-2 text-2xl font-medium">
              {stepForm === 0 ? 'Publicacion' : 'Fotos'}
            </h2>
            <p className="text-[#6E6A6C] ">
              {stepForm === 0
                ? 'Información básica'
                : 'Selecciona  máximo tres fotos para crear una galería'}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 mt-10"
            >
              {stepForm === 0 && (
                <section className="flex flex-col gap-4">
                  <label htmlFor="title" className=" relative">
                    <input
                      id="title"
                      type="text"
                      className="w-full h-12 border border-borderGray rounded-[11px] p-5"
                      required
                      {...register('title')}
                    />
                    <span className=" bg-white absolute left-2.5 px-2 transform -translate-y-3 text-borderGray">
                      Titulo de publicación
                    </span>
                  </label>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <select
                      {...register('tags')}
                      className="w-full h-12 border border-borderGray rounded-[11px] pl-2"
                      defaultValue={''}
                      required
                    >
                      <option
                        value={''}
                        disabled
                        hidden
                        className="text-borderGray"
                      >
                        Tipo
                      </option>
                      {tags?.map((tag) => (
                        <option
                          value={tag.id}
                          key={tag.id}
                          className="text-borderGray text-xl"
                        >
                          {tag.name}
                        </option>
                      ))}
                    </select>
                    <select
                      {...register('idPublicationType')}
                      className="w-full h-12 border border-borderGray rounded-[11px] pl-2"
                      defaultValue={''}
                      required
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="text-borderGray"
                      >
                        Categoría
                      </option>
                      {categories?.map((category) => (
                        <option
                          value={category.id}
                          key={category.id}
                          className="text-borderGray text-xl"
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label htmlFor="description" className=" relative">
                    <textarea
                      id="description"
                      className="w-full h-24 border border-solid border-borderGray rounded-md p-5 resize-none"
                      {...register('description')}
                      required
                    />
                    <span
                      className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4  text-[gray]
                  "
                    >
                      ¿Por qué lo recomiendas?
                    </span>
                  </label>
                  <label htmlFor="url" className=" relative">
                    <input
                      id="url"
                      type="text"
                      className="w-full h-11 border border-solid border-borderGray rounded-md p-5"
                      required
                      {...register('urlShare')}
                    />
                    <span className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
                      Link de referencia
                    </span>
                  </label>
                  <button
                    // onClick={completeFormStep}
                    type="submit"
                    className=" h-11 max-w-xs px-4 bg-primaryblue mt-10 rounded-3xl text-white self-center"
                  >
                    Crear Publicación
                  </button>
                </section>
              )}
              {stepForm === 1 && (
                <section className="mt-5 flex flex-col gap-4  mb-16 w-full">
                  <div className="flex items-center p-4 gap-4 justify-center w-full h-full border border-solid border-borderGray rounded-xl">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100 bg-primarygrayLight h-52 w-2/6"
                    >
                      <Image src={addIcon} alt="add" />
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept=".jpg, .png, .jpeg"
                      />
                    </label>
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100 bg-primarygrayLight h-52 w-2/6"
                    >
                      <Image src={addIcon} alt="add" />
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept=".jpg, .png, .jpeg"
                      />
                    </label>

                    <label
                      htmlFor="dropzone-file"
                      className="flex  items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100 bg-primarygrayLight h-52 w-2/6"
                    >
                      <Image src={addIcon} alt="add" />
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept=".jpg, .png, .jpeg"
                      />
                    </label>
                  </div>
                  <button className=" h-11 w-28 px-4 bg-primaryblue m-8 rounded-3xl text-white self-center">
                    Publicar
                  </button>
                </section>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
