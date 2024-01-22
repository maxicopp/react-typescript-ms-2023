import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';

function App() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameElement = (e.currentTarget as HTMLFormElement).elements.namedItem(
      'name'
    );
    const emailElement = (
      e.currentTarget as HTMLFormElement
    ).elements.namedItem('email');
    if (
      nameElement instanceof HTMLInputElement &&
      emailElement instanceof HTMLInputElement
    ) {
      console.log('Name: ', nameElement.value);
      console.log('Email: ', emailElement.value);
    }
  };

  return (
    <main>
      <Form id="signup" onSubmit={handleFormSubmit}>
        <Input id="name" label="Name" />
        <Input id="email" label="Email" />
        <Button type="submit">Submit</Button>
      </Form>
    </main>
  );
}

export default App;
