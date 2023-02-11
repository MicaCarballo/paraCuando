import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useMyUserInfo, useUserInfo } from '../lib/services/user.services';
const Config = () => {
  const { data: userInfo } = useUserInfo();
  const { data: myUserInfo } = useMyUserInfo(userInfo?.id);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState('');

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview('');
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Layout
      title="Configuración de perfil"
      description="Perfil de Para Cuando?"
    >
      <div className="w-full h-32 bg-primaryblue relative">
        <div className="h900-normal--48px mx-10 pt-9 md:mx-40 text-white">
          Perfil
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-center gap-5 mt-10 md:gap-20">
        <h3 className="h500-normal--24px py-10 pl-10 text-primaryblackLight">
          Información del Contacto
        </h3>
        <form
          action=""
          className="mt-0 grid md:grid-cols-[1fr_2fr] gap-10 justify-items-center md:justify-items-start mx-10"
        >
          <div className="flex flex-col items-start">
            <div className="relative mt-4 w-fit h-fit overflow-hidden hover:scale-105 transition-transform">
              <label
                htmlFor="file-input"
                className="relative cursor-pointer w-20 h-52 overflow-hidden"
              >
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
                {selectedFile && (
                  <img
                    src={preview}
                    className="absolute top-0 max-w-[300px] w-[220px] h-[206px] object-cover overflow-hidden rounded-2xl"
                  />
                )}
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                className="file:hidden file:apperence-none file:invisible file:opacity-0 hidden"
                onChange={onSelectFile}
              />
            </div>
            <p className="mt-5 text-center text-primarygrayDark">
              Agrega una foto para tu perfil
            </p>
          </div>
          <div className="flex flex-col justify-center gap-8 w-11/12">
            <label htmlFor="firstName" className=" relative bg-transparent">
              <span className="bg-white absolute left-5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
                First Name
              </span>
              <input
                defaultValue={myUserInfo?.first_name}
                id="firstName"
                type="text"
                className="pl-3 h-14 w-full border border-solid border-gray-700 rounded-xl "
              />
            </label>
            <label htmlFor="lastName" className=" relative">
              <input
                defaultValue={myUserInfo?.last_name}
                id="lastName"
                type="text"
                className="pl-3 h-14 w-full border border-solid border-gray-700 rounded-xl"
              />
              <span className=" bg-white absolute left-5 top-5 px-2  transform -translate-y-7 -translate-4 text-[gray]">
                Last Name
              </span>
            </label>
          </div>
          <h3 className="h500-normal--24px md:pt-10 row-span-1 justify-self-start text-primaryblackLight">
            Mis intereses
          </h3>
          <div className="row-span-3 col-span-full justify-self-center">
            <div className="flex gap-5 flex-wrap justify-center">
              <div className="bg-primarygrayLight w-[300px] h-[152px] rounded-2xl relative cursor-pointer hover:scale-105 transition-transform">
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
              </div>
              <div className="bg-primarygrayLight w-[300px] h-[152px] rounded-2xl relative cursor-pointer hover:scale-105 transition-transform">
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
              </div>
              <div className="bg-primarygrayLight w-[300px] h-[152px] rounded-2xl relative cursor-pointer hover:scale-105 transition-transform">
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
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="col-span-full justify-self-center mb-20 h-11 max-w-xs px-6 bg-primaryblue mt-10 rounded-3xl text-white self-center"
          >
            Guardar cambios
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Config;
