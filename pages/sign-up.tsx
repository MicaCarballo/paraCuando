import cookie from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUp } from '../lib/services/auth.services';
import {
  errorAlert,
  successAlert,
} from '../lib/services/notification.services';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [passwordType, setPasswordType] = useState('password');

  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    signUp(data)
      .then((res) => {
        successAlert('Se ha registrado el usuario');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2500);
      })
      .catch((err) => {
        errorAlert('Este usuario ya existe');
        console.log(err);
      });
    console.log(data);
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  useEffect(() => {
    if (cookie.get('token')) {
      router.push('/profile');
    }
  }, []);

  return (
    <div className=" md:flex flex-row-reverse w-screen">
      <div className="w-screen h-screen flex  pt-16 flex-col md:w-2/4 ">
        <Link href="/" className="  self-center">
          <div className="bg-paraCuandoTitle w-52 h-44 bg-no-repeat bg-cover flex self-center "></div>
        </Link>
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
              id="email"
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
                  id="firstName"
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
                  id="lastName"
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
            <div className="relative w-fit">
              <input
                id="password"
                type={passwordType}
                placeholder="***********"
                className="h-11 rounded-sm p-2 border-gray-300 border-solid border"
                minLength={8}
                {...register('password', { required: true })}
              />
              <div
                onClick={togglePassword}
                className="absolute -right-1/2 top-1/2 -translate-y-1/2 cursor-pointer selection:bg-transparent"
              >
                {passwordType == 'password' ? 'Mostrar' : 'No mostrar'}
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-800 h-10 rounded p-2 text-white cursor-pointer"
            >
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
