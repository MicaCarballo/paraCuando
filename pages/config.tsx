import Layout from '../components/Layout';
const Config = () => {
  return (
    <Layout
      title="Configuración de perfil"
      description="Perfil de Para Cuando?"
    >
      <div className="w-full h-32 bg-primaryblue relative">
        <div className="h900-normal--48px max-w-7xl mx-auto p-10 px-44 text-white">
          Perfil
        </div>
      </div>

      <h3 className="max-w-4xl mx-auto text-2xl font-medium pt-20">
        Información del Contacto
      </h3>
      <div className="max-w-7xl mx-auto flex justify-center gap-5 mt-10 md:gap-20">
        <div>
          <form action="" className=" mt-0 flex flex-row gap-36">
            <div className="flex flex-col items-start w-36">
              <div className="relative mt-4">
                <label htmlFor="file-input" className="relative cursor-pointer">
                  <svg
                    width="220"
                    height="206"
                    viewBox="0 0 220 206"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="220" height="206" rx="15" fill="#D9D9D9" />
                  </svg>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 "
                  >
                    <path
                      d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z"
                      fill="#1B4DB1"
                    />
                  </svg>
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  className="file:hidden file:apperence-none file:invisible file:opacity-0 hidden "
                />
                <p className="mt-5 text-center text-primarygrayDark">
                  Agrega una foto para tu perfil
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center w-[500px]">
              <label htmlFor="firstName" className=" relative bg-transparent">
                <input
                  id="firstName"
                  type="text"
                  className="pl-3 h-14 w-full border border-solid border-gray-700 rounded-xl "
                />
                <span className=" bg-white absolute left-5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
                  First Name
                </span>
              </label>
              <label htmlFor="lastName" className=" relative">
                <input
                  id="lastName"
                  type="text"
                  className="pl-3 h-14 w-full border border-solid border-gray-700 rounded-xl"
                />
                <span className=" bg-white absolute left-5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
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
