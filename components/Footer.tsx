import Image from 'next/image';
import footerImg from '../public/footerImg.png';
import SearchBar from './SearchBar';

interface Props {
  hideBar?: boolean;
}

export default function Footer({ hideBar }: Props) {
  return (
    <div className="h-96 relative">
      <Image
        src={footerImg}
        width={0}
        height={0}
        alt="footerImg"
        className="h-96 object-center object-cover mx-auto absolute -z-10 w-full"
        priority={true}
      />
      <SearchBar
        className={`${
          hideBar ? 'hidden pointer-events-none' : 'flex'
        } max-w-lg m-auto`}
      />
    </div>
  );
}
