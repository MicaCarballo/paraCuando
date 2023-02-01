import Image from 'next/image';
import { ReactNode, useState } from 'react';
import likeIcon from '../public/likedIcon.png';

interface Props {
  className?: ReactNode;
}

const LikedIcon = ({ className }: Props) => {
  const [liked, setliked] = useState(false);

  return (
    <button
      className={`${className} flex items-center justify-center p-2 h-12 w-12 border-white rounded-full ${
        liked ? ' bg-primarypink' : ' bg-primarygrayLight'
      }`}
      onClick={() => setliked(!liked)}
    >
      <Image src={likeIcon} alt="like" />
    </button>
  );
};

export default LikedIcon;
