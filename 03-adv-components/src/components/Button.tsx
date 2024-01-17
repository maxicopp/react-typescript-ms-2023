type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type AnchorProps = React.ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

type Props = ButtonProps | AnchorProps;

function isAnchorProps(props: Props): props is AnchorProps {
  return 'href' in props;
}

export default function Button(props: Props) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
}
