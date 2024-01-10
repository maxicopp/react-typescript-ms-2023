import React, { useRef } from 'react';

export default function NewGoal() {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current?.value;
    const enteredSummary = summaryRef.current?.value;

    console.log('Goal:', enteredGoal);
    console.log('Summary:', enteredSummary);
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
