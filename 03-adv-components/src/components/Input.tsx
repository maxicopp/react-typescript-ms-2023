type InputProps = {
  id: string;
  label: string;
  name: string;
};

export default function Input({ id, name, label }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" name={name} />
    </p>
  );
}
