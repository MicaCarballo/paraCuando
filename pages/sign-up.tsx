import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUp } from '../lib/services/auth.services';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    signUp(data)
      .then((res) => {
        window.location.href = '/login';
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <div className=" md:flex flex-row-reverse w-screen">
      <div className="w-screen h-screen flex  pt-16 flex-col md:w-2/4 ">
        <div className="bg-paraCuandoTitle w-52 h-44 bg-no-repeat bg-cover flex self-center "></div>
        <div className="h-96 p-6 max-w-xl mx-auto ">
          <h1 className="font-semibold text-3xl">Sign up</h1>
          <p className="py-2.5 text-slate-500 text-base ">
            Login with the data you entered during your registration.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col gap-2"
          >
            <label htmlFor="" className="text-[#1D1C3F] font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="john.doe@gmail.com"
              className="h-11 rounded-sm p-2 border-gray-300 border-solid border"
              {...register('email', { required: true })}
            />

            <div className="flex gap-2 w-full">
              <div className="flex flex-col w-2/4">
                <label htmlFor="" className="text-[#1D1C3F] font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Erik"
                  className="h-11 rounded-sm p-2 border-gray-300 border-solid border"
                  {...register('firstName', { required: true })}
                />
              </div>
              <div className="flex flex-col w-2/4">
                <label htmlFor="" className="text-[#1D1C3F] font-semibold">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Perez"
                  className="h-11 rounded-sm p-2 border-gray-300 border-solid border"
                  {...register('lastName', { required: true })}
                />
              </div>
            </div>
            <label htmlFor="" className="text-[#1D1C3F] font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="***********"
              className="h-11 rounded-sm p-2 border-gray-300 border-solid border"
              {...register('password', { required: true })}
            />
            <button className="bg-blue-800 h-10 rounded p-2 text-white cursor-pointer">
              Crear cuenta
            </button>
          </form>
          <div className="text-center flex justify-center">
            <Link href="/login">
              <p className=" flex self-center text-base m-2 cursor-pointer text-slate-500">
                or Log in
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex show w-2/4   justify-center content-center  bg-no-repeat bg-cover bg-signinDesktopImg ">
        <div className="flex">
          <div className="flex self-center bg-loginDeskTitle1 w-64 h-14 bg-no-repeat bg-cover "></div>
          <div className="flex self-center bg-loginDeskTitle2 w-32 h-14 bg-no-repeat bg-contain m-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
