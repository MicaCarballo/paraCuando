import LikeIcon from './LikeIcon';

const EventCardDesktop = () => {
  return (
    <div className=" card-event-desktop bg-white   rounded-2xl shadow-md ">
      <div className="img-container-desktop  w-full bg-no-repeat bg-cover  "></div>

      <div className=" text-container py-3 px-6 relative ">
        <div className="like absolute -top-9 right-8">
          <LikeIcon />
        </div>
        <div className="">
          <h3 className="font-semibold text-xl leading-6">
            Concierto de Lady Gaga
          </h3>
          <p className="text-sm py-1.5 text-slate-500 leading-4 ">
            El concierto con la temática de Lady gaga en Las Vegas. El concierto
            con la temática de Lady gaga en Las Vegas.El concierto con la
            temática.
          </p>
          <a
            href="http://ladygaga.com"
            className="text-blue-700 font-medium text-sm"
          >
            ladygaga.com
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
