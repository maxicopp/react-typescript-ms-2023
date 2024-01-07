export default function NewGoal() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('submitted');
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
        <button>Add Goal</button>
      </p>
    </form>
  );
}
