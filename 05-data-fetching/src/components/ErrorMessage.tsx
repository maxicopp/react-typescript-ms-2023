type ErrorMessageProps = {
  text: string;
};

export default function ErrorMessage({ text }: Readonly<ErrorMessageProps>) {
  return (
    <aside id="error">
      <h1>An error occurred!</h1>
      <p>{text}</p>
    </aside>
  );
}
