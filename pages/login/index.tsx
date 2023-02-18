import cookie from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '../../lib/services/auth.services';
import {
  errorAlert,
  loginAlert,
} from '../../lib/services/notification.services';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [passwordType, setPasswordType] = useState('password');

  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await login(data)
      .then((res) => {
        cookie.set('token', res.data.token[0].public);
        loginAlert();
        setTimeout(() => (window.location.href = '/profile'), 2000);
      })
      .catch((err) => errorAlert('Datos incorrectos'));
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
      <div className="w-screen h-screen flex  pt-24 flex-col md:w-2/4  ">
        <Link href="/" className="  self-center">
          <div className="bg-paraCuandoTitle w-52 h-44 bg-no-repeat bg-cover flex self-center "></div>
        </Link>

        <div className="h-96 p-6 max-w-xl mx-auto">
          <h1 className="font-semibold text-3xl">Login</h1>
          <p className="py-2.5 text-slate-500 text-base ">
            Login with the data you entered during your registration.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col gap-2 "
          >
            <label htmlFor="email" className="text-[#1D1C3F] font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john.doe@gmail.com"
              className="h-11 rounded-sm p-2 border-gray-300 border-solid border"
              {...register('email', { required: true })}
            />
            <label htmlFor="password" className="text-[#1D1C3F] font-semibold">
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
            <button className=" bg-primaryblue h-10 rounded p-2 text-white cursor-pointer">
              Log in
            </button>
          </form>

          <div className="text-center flex justify-center">
            <p className="w-40 flex self-center text-base m-2 cursor-pointer text-slate-500">
              Did you forget your password?
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex show w-2/4 bg-loginDesktop  justify-center content-center  bg-no-repeat bg-cover ">
        <div className="flex">
          <div className="flex self-center bg-loginDeskTitle1 w-64 h-14 bg-no-repeat bg-cover "></div>
          <div className="flex self-center bg-loginDeskTitle2 w-32 h-14 bg-no-repeat bg-contain m-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
