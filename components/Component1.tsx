import { ReactNode } from 'react';

interface Props {
  text: ReactNode;
}

const Component1 = ({ text }: Props) => {
  return (
    <div className="component1 bg-white hover:bg-primarygrayLighter transition-colors">
      <p>{text}</p>
    </div>
  );
};

export default Component1;
