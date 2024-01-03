interface Props {
  image: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
}

export default function Header({ image, children }: Props) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
