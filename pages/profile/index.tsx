import Image from 'next/image';
import Component1 from '../../components/Component1';
import EventCardDesktop from '../../components/EventCardDesktop';
import Layout from '../../components/Layout';
import profileimg from '../../public/profileimg.png';
//responsive desing tailwind
export default function Profile() {
  return (
    <Layout
      title="Para Cuando? - Perfil"
      description="Perfil de Para Cuando?"
      hideBar
    >
      <div className="w-full h-32 bg-primaryblue relative ">
        <Image
          src={profileimg}
          width={117}
          height={117}
          priority={true}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 top-16"
        />
      </div>
      <div className="flex justify-center pt-20 gap-3 h500-medium--14px">
        <Component1 text="Mis votos"></Component1>
        <Component1 text="Mis publicaciones"></Component1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-fit h-2/3 m-auto pt-16 pb-40 justify-items-center gap-5">
        <EventCardDesktop></EventCardDesktop>
        <EventCardDesktop></EventCardDesktop>
        <EventCardDesktop></EventCardDesktop>
        <EventCardDesktop></EventCardDesktop>
        <EventCardDesktop></EventCardDesktop>
      </div>
      <div></div>
    </Layout>
  );
}
