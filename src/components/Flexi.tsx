import React, { useState, FormEvent } from 'react';

import TextField from './TextField';
import DropDown from './DropDown';

import {
  FlexiConfig,
  ItemType,
  FlexiConfigDropDownItem,
  FormData
} from '../types/index';

type Props = {
  onSubmit: (formData: FormData) => void;
  config: FlexiConfig;
};

const Flexi = ({ onSubmit, config }: Props): JSX.Element => {
  const initialFormData: FormData = {};

  config.items.forEach(item => {
    initialFormData[item.name] = '';
  });

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleFieldChange = (name: string, value: string): void => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onSubmit(formData);
  };

  const fields = config.items.map(item => {
    switch (item.type) {
      case ItemType.TextField:
        return (
          <TextField
            name={item.name}
            label={item.label}
            value={formData[item.name]}
            onChange={handleFieldChange}
            key={item.name}
          />
        );
      case ItemType.DropDown:
        return (
          <DropDown
            name={item.name}
            label={item.label}
            values={(item as FlexiConfigDropDownItem).values}
            value={formData[item.name]}
            onChange={handleFieldChange}
            key={item.name}
          />
        );
      default:
        return null;
    }
  });

  return (
    <>
      <form className="Flexi" onSubmit={handleSubmit}>
        {fields}
        <input type="submit" value="Submit" />
      </form>
      <div className="Flexi-state">
        <p>Component State:</p>
        <pre>{JSON.stringify(formData)}</pre>
      </div>
    </>
  );
};

export default Flexi;
