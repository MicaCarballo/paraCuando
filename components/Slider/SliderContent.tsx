import Image from 'next/image';
import Link from 'next/link';
import LikedIcon from '../LikedIcon';

interface Props {
  img: string;
  text: string;
  titleEvent: string;
  linkToEvent: string;
  event_id: string;
  votesCount: number;
}

export default function SliderContent({
  img,
  text,
  titleEvent,
  linkToEvent,
  event_id,
  votesCount,
}: Props) {
  return (
    <div
      className="shadow rounded-3xl relative"
      style={{ height: '450px', width: '300px' }}
    >
      <Image
        src={img}
        width={300}
        height={240}
        priority={true}
        alt="sliderImg"
      />
      <LikedIcon publicationId={event_id} className="absolute top-52 right-6" />
      <div className="p-3 px-5 relative">
        <Link
          href={`/event/${event_id}`}
          className="h600-medium--20px hover:underline"
        >
          {titleEvent.slice(0, 25) + (titleEvent.length > 25 ? '...' : '')}
        </Link>
        <p className="h400-medium--15px h-[90px] overflow-hidden relative z-0">
          {text}
        </p>
        <div className="w-64 h-24 bg-gradient-to-t from-white absolute bottom-0 z-10"></div>
        <a
          href={`${linkToEvent}`}
          rel="noreferrer"
          target="_blank"
          className="text-primaryblue h500-medium--14px absolute -bottom-4 px-1"
        >
          {linkToEvent.slice(linkToEvent.indexOf('.') + 1, 45) +
            (linkToEvent.length > 45 ? '...' : '')}
        </a>
        <span className="flex gap-2 items-center absolute -bottom-12 px-2 h500-medium--14px">
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
          {`${votesCount} voto${votesCount != 1 ? 's' : ''}`}
        </span>
      </div>
    </div>
  );
}
