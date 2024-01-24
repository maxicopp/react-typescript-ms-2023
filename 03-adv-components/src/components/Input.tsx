import React, { forwardRef } from 'react';

type InputProps = {
  id: string;
  label: string;
  name: string;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, name, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} ref={ref} {...props} autoComplete="off" />
    </p>
  );
});

export default Input;