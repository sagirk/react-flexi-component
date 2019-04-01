import React, { ChangeEvent } from 'react';

type Props = {
  name: string;
  label: string;
  values: string[];
  value: string;
  onChange: (name: string, value: string) => void;
  key: string;
};

const DropDown = ({ name, label, values, onChange, value }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <label>
      {label}
      <select value={value} onChange={handleChange}>
        <option value={''} disabled>
          Choose {label}
        </option>
        {values.map(value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};

export default DropDown;
