// interface Props {
//   title: string;
//   children: React.ReactNode;
// }

type Props = React.PropsWithChildren<{
  id: number;
  title: string;
  onDeleteGoal: (id: number) => void;
}>;

export default function CourseGoal({
  id,
  title,
  children,
  onDeleteGoal,
}: Props) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDeleteGoal(id)}>DELETE</button>
    </article>
  );
}

// const CourseGoal: React.FC<Props> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// };

// export default CourseGoal;
