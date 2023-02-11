import Image from 'next/image';
import router from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import {
  createVote,
  useUserInfo,
  useUserVotes,
} from '../lib/services/user.services';
import likeIcon from '../public/likedIcon.png';

interface Props {
  className?: ReactNode;
  publicationId: string;
}

const LikedIcon = ({ className, publicationId }: Props) => {
  const { data: userInfo } = useUserInfo();
  const { data: votes } = useUserVotes(userInfo?.id);

  const [liked, setLiked] = useState(false);

  const clickVote = async function votePublication() {
    if (!userInfo) {
      router.push('/login');
    } else {
      await createVote(publicationId)
        .then((res) => {
          if (res.data.results == 'Vote removed') {
            setLiked(false);
          } else {
            setLiked(true);
          }
          console.log(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (votes) {
      const flag = votes.results.find(
        (vote) => vote.publication_id === publicationId
      );

      flag ? setLiked(true) : setLiked(false);
    }
  }, [votes]);

  return (
    <button
      className={`${className} absolute z-10 hover:scale-105 transition-transform flex items-center justify-center p-2 h-12 w-12 border-white rounded-full ${
        liked ? ' bg-primarypink' : ' bg-primarygrayLight'
      }`}
      onClick={clickVote}
    >
      <Image src={likeIcon} alt="like" />
    </button>
  );
};

export default LikedIcon;
