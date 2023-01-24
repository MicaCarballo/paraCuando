import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Title1 = ({ children }: Props) => {
  return <h1 className="h900-normal--48px text-primaryyellow">{children}</h1>;
};
export default Title1;
