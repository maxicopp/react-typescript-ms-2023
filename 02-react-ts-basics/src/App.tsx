import { useState } from 'react';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => [
      ...prevGoals,
      {
        title: 'Learn React + TS',
        description: 'Learn it from the ground up',
        id: Math.random(),
      },
    ]);
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add New Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}

export default App;
