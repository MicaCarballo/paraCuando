import Link from 'next/link';
import LikeIcon from './LikedIcon';

interface Props {
  title: string;
  description: string;
  linkToEvent: string;
  publication_id: string;
}

const EventCardDesktop = ({
  title,
  description,
  linkToEvent,
  publication_id,
}: Props) => {
  return (
    <div className=" card-event-desktop bg-white   rounded-2xl shadow-md ">
      <div className="img-container-desktop  w-full bg-no-repeat bg-cover  "></div>

      <div className=" text-container py-3 px-6 relative ">
        <div className="like absolute -top-9 right-8">
          <LikeIcon />
        </div>
        <div className="">
          <Link
            href={`/event/${publication_id}`}
            className="font-semibold text-xl leading-6"
          >
            {title}
          </Link>
          <p className="text-sm py-1.5 text-slate-500 leading-4 ">
            {description}
          </p>
          <a
            href="http://ladygaga.com"
            className="text-blue-700 font-medium text-sm"
          >
            {linkToEvent}
          </a>
        </div>
        <div className="flex  gap-4 items-center  mt-4">
          <div className="icon h-3.5 w-3.5 bg-no-repeat bg-cover"></div>
          <p className="font-medium text-sm">90’800’756 votos</p>
        </div>
      </div>
    </div>
  );
};

export default EventCardDesktop;
