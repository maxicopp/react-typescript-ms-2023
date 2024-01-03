// interface Props {
//   title: string;
//   children: React.ReactNode;
// }

type Props = React.PropsWithChildren<{
  title: string;
}>;

export default function CourseGoal({ title, children }: Props) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
}
