import Image from 'next/image';
import Layout from '../components/Layout';
import Rectangle183 from '../public/Rectangle183.png';
import Vectormas from '../public/Vectormas.png';
const Config = () => {
  return (
    <Layout
      title="Configuración de perfil"
      description="Perfil de Para Cuando?"
    >
      <div className="w-full h-32 bg-primaryblue relative">
        <div className="text-6xl absolute translate-x-56 font-black text-[#F8F7FA] top-[25px]">
          Perfil
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-10 md:gap-20 md:m-20">
        <div>
          <form action="" className=" mt-0 flex flex-row gap-36">
            <div className="flex flex-col items-start w-36">
              <h3 className="text-center text-2xl font-medium ">
                Foto de perfil
              </h3>

              <span className="h400-normal-16px text-primary-blackLight w-[208px]">
                Agrega una foto para tu perfil
              </span>
              <div className="relative mt-8">
                <label htmlFor="file-input" className="img1">
                  <Image
                    src={Rectangle183}
                    width={177}
                    height={206}
                    alt=""
                    className="relative justify-center"
                  ></Image>

                  <Image
                    src={Vectormas}
                    width={17}
                    height={17}
                    alt=" "
                    className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 "
                  ></Image>
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  className="file:hidden file:apperence-none file:invisible file:opacity-0 hidden "
                />
              </div>
            </div>
            <div className="flex flex-col gap-14">
              <h2 className=" text-2xl font-medium ">
                Información del Contacto
              </h2>
              <label htmlFor="firstName" className=" relative bg-transparent">
                <input
                  id="firstName"
                  type="text"
                  className="pl-3 w-3/4 md:w-[620px] h-14 border border-solid border-gray-700 rounded-md "
                />
                <span className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
                  First Name
                </span>
              </label>
              <label htmlFor="lastName" className=" relative">
                <input
                  id="lastName"
                  type="text"
                  className="pl-3 w-3/4 md:w-[620px] h-14 border border-solid border-gray-700 rounded-md "
                />
                <span className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
                  Last Name
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Config;
