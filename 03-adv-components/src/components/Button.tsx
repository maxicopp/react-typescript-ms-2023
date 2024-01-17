type ButtonProps = {
  el: 'button';
} & React.ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'anchor';
} & React.ComponentPropsWithoutRef<'a'>;

type Props = ButtonProps | AnchorProps;

export default function Button(props: Props) {
  if (props.el === 'anchor') {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
}
