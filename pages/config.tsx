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
        <div className="text-6xl translate-x-56 font-black text-[#F8F7FA]">
          Perfil
        </div>
      </div>
      <div className="relative grid grid-flow-col">
        <div className="w-full h-32 bg-white">
          <h2 className="text-center relative text-2xl font-medium top-20">
            Foto de perfil
          </h2>
          <span className="relative text-center left-32 top-20">
            Agrega una foto para tu perfil
          </span>
          <Image
            src={Rectangle183}
            width={177}
            height={206}
            alt=""
            className="relative left-1/2  -translate-x-1/2 top-28"
          ></Image>

          <Image
            src={Vectormas}
            width={17}
            height={17}
            alt=""
            className="relative left-1/2  -translate-x-1/2 "
          ></Image>
        </div>
        <form action="" className=" mt-11 flex flex-col gap-4">
          <h2 className="m-2 text-2xl font-medium ">
            Información del Contacto
          </h2>
          <label htmlFor="" className=" relative">
            <input
              type="text"
              className="w-3/4 h-11 border border-solid border-gray-700 rounded-md "
            />
            <span className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
              First Name
            </span>
          </label>
          <label htmlFor="" className=" relative">
            <input
              type="text"
              className="w-3/4 h-11 border border-solid border-gray-700 rounded-md "
            />
            <span className=" bg-white absolute left-2.5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
              Last Name
            </span>
          </label>
        </form>
      </div>
    </Layout>
  );
};

export default Config;
