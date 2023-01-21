import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import paraCuandoLogo from '../public/paraCuandoLogo.svg';

const Header = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const email = 'email@test.com';

  return (
    <div className="bg-primary_blackLight text-white">
      <nav className="flex gap-4 justify-between items-center px-4 h-16 w-full max-w-screen-lg my-0 mx-auto">
        <Link href={'/home'}>
          <Image
            src={paraCuandoLogo}
            alt="paraCuandoLogo"
            width={62}
            height={30}
          />
        </Link>
        <div className="flex gap-7 text-sm">
          <Link
            href={'/new-publication'}
            className={`text-primary_blue items-center gap-2 ${
              isLogged ? 'hidden' : 'flex'
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z"
                fill="#1B4DB1"
              />
            </svg>
            Crear publicación
          </Link>
          {isLogged && (
            <Link
              href={'/my-votes'}
              className="items-center gap-2 hidden sm:flex"
            >
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.675 1C3.09313 1 1 3.00868 1 5.4864C1 9.97279 6.525 14.0513 9.5 15C12.475 14.0513 18 9.97279 18 5.4864C18 3.00868 15.9069 1 13.325 1C11.744 1 10.3458 1.75331 9.5 2.90631C9.06891 2.31705 8.49622 1.83614 7.8304 1.50431C7.16458 1.17248 6.42525 0.999492 5.675 1Z"
                  stroke="#FF64BC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Mis votos
            </Link>
          )}
          {isLogged ? (
            email
          ) : (
            <div className="flex gap-4">
              <Link href={'/login'}>Log In</Link>
              <Link href={'/signup'}>Sign Up</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Header;
