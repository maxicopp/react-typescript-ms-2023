type InputProps = {
  id: string;
  label: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
