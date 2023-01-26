import Image from 'next/image';
import { useState } from 'react';
import addIcon from '../public/addIcon.png';
import downArrow from '../public/arrow-down.png';
import upArrow from '../public/arrow-up.png';

export default function Post() {
  const [openType, setopenType] = useState(false);
  const [openCategories, setopenCategories] = useState(false);
  const [stepForm, setstepForm] = useState(0);

  const handleClickTypes = (event: { preventDefault: () => any }) => {
    event.preventDefault(), setopenType(!openType);
  };

  const handleClickCategories = (event: {
    preventDefault: () => void;
  }): void => {
    event.preventDefault();
    setopenCategories(!openCategories);
  };
  const completeFormStep = () => {
    setstepForm((cur) => cur + 1);
  };
  const returnStep = () => {
    if (stepForm > 0) {
      setstepForm((cur) => cur - 1);
    }
  };

  return (
    <div className=" with-screen h-auto  md:flex  ">
      <div className=" h-80 w-full  bg-[#1B4DB1]   flex flex-col  md:h-screen md:w-1/3 md:pt-20">
        <div className=" h-28 w-32 bg-paraCuandoTitleWhite bg-contain bg-no-repeat bg-center  self-center mt-6 mb-3 "></div>
        <div className=" bg-loginDeskTitle1Small w-36 h-8 self-center"></div>
        <div className="flex flex-col p-4">
          <h3 className="mt-3 text-[#F3F243] ">¡Bienvenido, creador!</h3>
          <p className="pt-4 pb-4 text-white">
            A continuación puedes completar la info de la marca, artista o
            torneo que quieres cerca.
          </p>
        </div>
      </div>
      <div className=" w-full h-auto  flex flex-col px-4">
        <h3
          className="m-3 text-[#1B4DB1] font-xl cursor-pointer"
          onClick={returnStep}
        >
          Back
        </h3>

        <div className=" w-11/12 h-3 bg-primarygrayLight self-center rounded-md mt-3 mb-9">
          {stepForm === 0 ? (
            <div className="w-3/5 h-3 bg-blue rounded-md"></div>
          ) : (
            <div className="w-full h-3 bg-blue rounded-md"></div>
          )}
        </div>

        <h2 className="m-2 text-2xl font-medium ">
          {stepForm === 0 ? 'Publicacion' : 'Fotos'}
        </h2>
        <p className="text-[#6E6A6C] ">
          {stepForm === 0
            ? 'Información básica'
            : 'Selecciona  máximo tres fotos para crear una galería'}
        </p>

        <form action="" className=" mt-11 flex flex-col gap-4">
          {stepForm === 0 && (
            <section className="mt-11 flex flex-col gap-4">
              <label htmlFor="" className=" relative">
                <input
                  type="text"
                  className="w-full h-11 border border-solid border-gray-700 rounded-md "
                />
                <span className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
                  Titulo de publicación
                </span>
              </label>
              <div className=" flex flex-col gap-4 md:flex-row">
                <div className=" w-full">
                  <button
                    onClick={handleClickTypes}
                    className="w-full h-auto border border-solid border-t-primarygray rounded-md px-4 py-2 "
                  >
                    <div className="  w-full flex place-content-between ">
                      <span className="text-[#6E6A6C]">Tipo</span>
                      {openType ? (
                        <Image
                          className=" h-2.5 w-5 self-center"
                          src={upArrow}
                          alt="downArrow"
                        />
                      ) : (
                        <Image
                          className=" h-2.5 w-5 self-center"
                          src={downArrow}
                          alt="downArrow"
                        />
                      )}
                    </div>
                    {openType && (
                      <div className="w-full h-full  ">
                        <ul className=" flex place-content-start flex-col text-left gap-3 mt-3">
                          <li className=" text-primarygrayLight">
                            Marcas y tiendas
                          </li>
                          <li className=" text-primarygrayLight">
                            Artistas y conciertos
                          </li>
                          <li className=" text-primarygrayLight">Torneos</li>
                        </ul>
                      </div>
                    )}
                  </button>
                </div>
                <div className=" w-full">
                  <button
                    onClick={handleClickCategories}
                    className="w-full h-auto border border-solid border-primarygray rounded-md px-4 py-2"
                  >
                    <div className="  w-full flex place-content-between ">
                      <span className=" text-[gray]">Categoría</span>
                      {openCategories ? (
                        <Image
                          className=" h-2.5 w-5 self-center"
                          src={upArrow}
                          alt="downArrow"
                        />
                      ) : (
                        <Image
                          className=" h-2.5 w-5 self-center"
                          src={downArrow}
                          alt="downArrow"
                        />
                      )}
                    </div>
                    {openCategories && (
                      <div className="w-full h-full  ">
                        <ul className=" flex place-content-start flex-col text-left gap-3 mt-3">
                          <li className=" text-primarygrayLight">
                            Ropa y accesorios
                          </li>
                          <li className=" text-primarygrayLight">Deportes</li>
                          <li className=" text-primarygrayLight">Conciertos</li>
                          <li className=" text-primarygrayLight">
                            Meet & Greet
                          </li>
                          <li className=" text-primarygrayLight">E-sport</li>
                          <li className=" text-primarygrayLight">Pop / Rock</li>
                          <li className=" text-primarygrayLight">Tecnología</li>
                          <li className=" text-primarygrayLight">
                            Hogar / Decoración
                          </li>
                          <li className=" text-primarygrayLight">
                            Abastecimiento
                          </li>
                        </ul>
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <label htmlFor="" className=" relative">
                <input
                  type="text"
                  className="w-full h-24 border border-solid border-primarygrayLight rounded-md "
                />
                <span
                  className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4  text-[gray]
                  "
                >
                  ¿Por qué lo recomiendas?
                </span>
              </label>
              <label htmlFor="" className=" relative">
                <input
                  type="text"
                  className="w-full h-11 border border-solid border-primarygrayLight rounded-md "
                />
                <span className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
                  Link de referencia
                </span>
              </label>
              <button
                onClick={completeFormStep}
                type="button"
                className=" h-11 w-28 px-4 bg-blue m-8 rounded-3xl text-white self-center"
              >
                Siguiente
              </button>
            </section>
          )}
          {stepForm === 1 && (
            <section className="mt-5 flex flex-col gap-4  mb-16 w-full">
              <div className="flex items-center p-4 gap-4 justify-center w-full h-full border border-solid border-x-primarygrayDark rounded-xl">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 bg-primarygrayLight dark:hover:border-gray-500 dark:hover:bg-gray-600 h-32 w-2/6"
                >
                  <Image src={addIcon} alt="add" />
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 bg-primarygrayLight dark:hover:border-gray-500 dark:hover:bg-gray-600 h-32 w-2/6"
                >
                  <Image src={addIcon} alt="add" />
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>

                <label
                  htmlFor="dropzone-file"
                  className="flex  items-center justify-center rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 bg-primarygrayLight dark:hover:border-gray-500 dark:hover:bg-gray-600 h-32 w-2/6"
                >
                  <Image src={addIcon} alt="add" />
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <button className=" h-11 w-28 px-4 bg-blue m-8 rounded-3xl text-white self-center">
                Publicar
              </button>
            </section>
          )}
        </form>
      </div>
    </div>
  );
}
