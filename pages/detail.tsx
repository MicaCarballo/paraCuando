//* Images
import detailImage from '../public/ladyGaga.png';

import Image from 'next/image';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';

export default function Detail() {
  let numberOfVotes = "9'000'000";

  return (
    <Layout
      title="Para Cuándo? - Detalles"
      description="Detalles del evento aquí"
    >
      <header className="flex gap-2 px-10 py-5 shadow-lg">
        <div className="flex items-center justify-center pr-6">
          <svg
            width="49"
            height="46"
            viewBox="0 0 49 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -z-10"
          >
            <rect
              x="0.5"
              y="0.5"
              width="48"
              height="45"
              rx="22.5"
              fill="white"
              stroke="#A7A6A7"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 18C10.7167 18 10.4793 17.904 10.288 17.712C10.096 17.5207 10 17.2833 10 17C10 16.7167 10.096 16.4793 10.288 16.288C10.4793 16.096 10.7167 16 11 16H13C13.2833 16 13.521 16.096 13.713 16.288C13.9043 16.4793 14 16.7167 14 17C14 17.2833 13.9043 17.5207 13.713 17.712C13.521 17.904 13.2833 18 13 18H11ZM4 8C3.71667 8 3.47933 7.90433 3.288 7.713C3.096 7.521 3 7.28333 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6H20C20.2833 6 20.5207 6.09567 20.712 6.287C20.904 6.479 21 6.71667 21 7C21 7.28333 20.904 7.521 20.712 7.713C20.5207 7.90433 20.2833 8 20 8H4ZM7 13C6.71667 13 6.479 12.904 6.287 12.712C6.09567 12.5207 6 12.2833 6 12C6 11.7167 6.09567 11.479 6.287 11.287C6.479 11.0957 6.71667 11 7 11H17C17.2833 11 17.5207 11.0957 17.712 11.287C17.904 11.479 18 11.7167 18 12C18 12.2833 17.904 12.5207 17.712 12.712C17.5207 12.904 17.2833 13 17 13H7Z"
              fill="black"
            />
          </svg>
        </div>
        <SearchBar />
      </header>
      <main className="px-5 py-20">
        <div className="pb-28">
          <h4>Artista / Pop / Rock</h4>
          <h1 className="font-bold text-4xl">Concierto de Lady Gaga</h1>
          <p className="py-6">
            El concierto con la temática de Lady gaga en Las Vegas. El concierto
            con la temática de Lady gaga en Las Vegas.El concierto con la
            temática.
          </p>
          <a href="link" className="text-primary_blue font-semibold">
            ladygaga.com
          </a>
          <span className="flex gap-2 items-center py-1 font-semibold">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.89245 12.3778L1.8923 12.3781C1.68621 12.7136 1.5835 13.0766 1.5835 13.4834V14.25C1.5835 14.5764 1.69105 14.8376 1.92733 15.0738C2.16269 15.3092 2.42338 15.4167 2.75016 15.4167H14.2502C14.5768 15.4167 14.8379 15.3093 15.074 15.0738C15.3094 14.8378 15.4168 14.5766 15.4168 14.25V13.4834C15.4168 13.0766 15.3141 12.7136 15.108 12.3781L15.1079 12.3778C14.8992 12.0379 14.6301 11.7874 14.2932 11.6122C13.3524 11.1422 12.4008 10.7916 11.438 10.5581C10.4738 10.3249 9.49492 10.2084 8.50016 10.2084C7.5054 10.2084 6.52654 10.3249 5.56233 10.5581L1.89245 12.3778ZM1.89245 12.3778C2.10108 12.0379 2.37019 11.7874 2.7071 11.6122M1.89245 12.3778L2.7071 11.6122M2.7071 11.6122C3.64777 11.1423 4.59919 10.7917 5.5619 10.5582L2.7071 11.6122ZM8.50016 7.75004C7.64649 7.75004 6.93437 7.45483 6.3232 6.84367C5.71204 6.23251 5.41683 5.52038 5.41683 4.66671C5.41683 3.81304 5.71204 3.10091 6.3232 2.48975C6.93437 1.87858 7.64649 1.58337 8.50016 1.58337C9.35384 1.58337 10.066 1.87858 10.6771 2.48975C11.2883 3.10091 11.5835 3.81303 11.5835 4.66671C11.5835 5.52038 11.2883 6.23251 10.6771 6.84367C10.066 7.45483 9.35384 7.75004 8.50016 7.75004Z"
                stroke="#1A1E2E"
                strokeWidth="1.5"
              />
            </svg>
            {`${numberOfVotes} votos`}
          </span>
          <Image
            src={detailImage}
            alt="detailImage"
            width={0}
            height={0}
            priority={true}
            style={{ width: 'auto', height: 'auto' }}
          />
          <button className="bg-blue text-white text-lg font-normal rounded-full my-5 py-2 w-full">
            Votar
          </button>
        </div>
      </main>
    </Layout>
  );
}