import { useEffect, useRef, useState } from 'react';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log({ inputValue });
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <main>
      <Input
        id="name"
        label="Name"
        ref={inputRef}
        onChange={handleInputChange}
      />
    </main>
  );
}

export default App;
