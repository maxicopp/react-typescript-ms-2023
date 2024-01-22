import Button from './components/Button';
import Container from './components/Container';

function App() {
  return (
    <main>
      <Container as="header" className="header">
        <h1>Vite + React</h1>
      </Container>
      <Container as={Button} type="button" onClick={() => console.log('click')}>
        Click me
      </Container>
    </main>
  );
}

export default App;
