import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  text: ReactNode;
  onClickProfile: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ButtonProfile = ({ className, text, onClickProfile }: Props) => {
  return (
    <button
      className={`component1 bg-white transition-all ${className}`}
      onClick={onClickProfile}
    >
      <p>{text}</p>
    </button>
  );
};

export default ButtonProfile;
