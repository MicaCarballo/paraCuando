import { ReactNode } from 'react';

interface Props {
  text: ReactNode;
}

const Component1 = ({ text }: Props) => {
  return (
    <div className="component1">
      <p>{text}</p>
    </div>
  );
};

export default Component1;
