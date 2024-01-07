export default function NewGoal() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const goal = formData.get('goal');
    const summary = formData.get('summary');

    console.log('Goal:', goal);
    console.log('Summary:', summary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" name="goal" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" name="summary" id="summary" />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
