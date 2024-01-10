import React, { useRef } from 'react';

type NewGoalProps = {
  onAddGoal: (enteredGoal: string, enteredSummary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current?.value;
    const enteredSummary = summaryRef.current?.value;

    if (!enteredGoal || !enteredSummary) {
      alert('Please enter a goal and a short summary');
      return;
    }

    onAddGoal(enteredGoal, enteredSummary);

    goalRef.current.value = '';
    summaryRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" name="goal" id="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" name="summary" id="summary" ref={summaryRef} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
