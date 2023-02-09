import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  text: ReactNode;
  onClickProfile: MouseEventHandler<HTMLButtonElement>;
}

const ButtonProfile = ({ text, onClickProfile }: Props) => {
  return (
    <button
      className="component1 bg-white hover:bg-primarygrayLighter transition-colors"
      onClick={onClickProfile}
    >
      <p>{text}</p>
    </button>
  );
};

export default ButtonProfile;
