import Button from './components/Button';
import Container from './components/Container';

function App() {
  return (
    <main>
      <Container as="header">
        <h1>Vite + React</h1>
        <Button>Click me</Button>
      </Container>
    </main>
  );
}

export default App;
