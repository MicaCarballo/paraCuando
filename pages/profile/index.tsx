import Image from 'next/image';
import { useState } from 'react';
import { default as ButtonProfile } from '../../components/ButtonProfile';
import Layout from '../../components/Layout';
import SliderContent from '../../components/Slider/SliderContent';
import {
  useUserInfo,
  useUserPublications,
  useUserVotes,
} from '../../lib/services/user.services';
import profileimg from '../../public/profileimg.png';

//responsive desing tailwind
export default function Profile() {
  const [showVotes, setShowVotes] = useState(false);
  const { data: user } = useUserInfo();
  const { data: votes, mutate: votesMutate } = useUserVotes(user?.id);
  const { data: myPublications, mutate: publiMutate } = useUserPublications(
    user?.id
  );

  let voteArr = votes?.results.map((vote) => (
    <SliderContent
      img={vote.Publication.image_url || '/sliderImg.png'}
      event_id={vote.publication_id}
      key={vote.publication_id}
      titleEvent={vote.Publication.title}
      text={vote.Publication.description}
      linkToEvent={vote.Publication.content}
      votesCount={vote.Publication.votes_count}
    />
  ));
  let publicationArr = myPublications?.results.map((myPublication) => (
    <SliderContent
      img={myPublication.image_url || '/sliderImg.png'}
      event_id={myPublication.id}
      key={myPublication.id}
      titleEvent={myPublication.title}
      text={myPublication.description}
      linkToEvent={myPublication.content}
      votesCount={myPublication.votes_count}
    />
  ));

  const buttonUpdate = function (arg: boolean) {
    setShowVotes(arg);
    publiMutate();
  };

  const buttonPublications = () => buttonUpdate(false);
  const buttonVotes = () => buttonUpdate(true);

  votesMutate();

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
        <ButtonProfile
          className={showVotes ? 'bg-yellow-100 scale-105' : ''}
          text="Mis votos"
          onClickProfile={buttonVotes}
        />
        <ButtonProfile
          className={!showVotes ? 'bg-yellow-100 scale-105' : ''}
          text="Mis publicaciones"
          onClickProfile={buttonPublications}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-fit h-2/3 m-auto pt-16 pb-40 justify-items-center gap-5">
        {showVotes
          ? votes?.count !== 0
            ? voteArr
            : 'No hay votos'
          : myPublications?.count !== 0
          ? publicationArr
          : 'No hay publicaciones'}
      </div>
    </Layout>
  );
}
