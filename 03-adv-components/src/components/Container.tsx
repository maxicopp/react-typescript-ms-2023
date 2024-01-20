import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  const { as: Component, children } = props;

  return <Component className="container">{children}</Component>;
}
