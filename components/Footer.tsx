import Image from 'next/image';
import footerImg from '../public/footerImg.png';
import SearchBar from './SearchBar';

export default function Footer() {
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
      <SearchBar classname="m-auto" />
    </div>
  );
}
