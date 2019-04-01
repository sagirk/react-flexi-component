import React, { ChangeEvent } from 'react';

type Props = {
  name: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
  key: string;
};

const TextField = ({ name, label, onChange, value }: Props): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <label>
      {label}
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
};

export default TextField;
