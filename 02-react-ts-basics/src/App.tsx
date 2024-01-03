import { useState } from 'react';
import CourseGoal from './components/CourseGoal';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header';

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    console.log('Add goal');
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
      <CourseGoal title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}

export default App;
