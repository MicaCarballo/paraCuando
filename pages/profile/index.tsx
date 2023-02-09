import Image from 'next/image';
import { useState } from 'react';
import { default as ButtonProfile } from '../../components/ButtonProfile';
import EventCardDesktop from '../../components/EventCardDesktop';
import Layout from '../../components/Layout';
import { usePublications } from '../../lib/services/publications.services';
import { useUserInfo, useUserVotes } from '../../lib/services/user.services';
import profileimg from '../../public/profileimg.png';

//responsive desing tailwind
export default function Profile() {
  const [showVotes, setShowVotes] = useState(false);
  const { data: user } = useUserInfo();
  const { data: votes } = useUserVotes(user?.id);
  const { data: publications } = usePublications();
  const buttonPublications = function () {
    setShowVotes(false);
  };

  const buttonVotes = function () {
    setShowVotes(true);
  };

  const mypublications = publications?.results.filter(
    (x) => x.profile_id == user?.id
  );
  console.log(votes);

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
        <ButtonProfile text="Mis votos" onClickProfile={buttonVotes} />
        <ButtonProfile
          text="Mis publicaciones"
          onClickProfile={buttonPublications}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-fit h-2/3 m-auto pt-16 pb-40 justify-items-center gap-5">
        {/*showVotes ? 'votos' : 'publicaciones'*/}

        {votes?.results.map((mypublication) => (
          <EventCardDesktop
            key={mypublication.publication_id}
            title={mypublication.Publication.title}
            description={mypublication.Publication.description}
            linkToEvent={mypublication.Publication.content}
          />
        ))}
      </div>
    </Layout>
  );
}
