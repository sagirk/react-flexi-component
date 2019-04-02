import React, { useState, FormEvent } from 'react';

import TextField from './TextField';
import DropDown from './DropDown';

import {
  FlexiConfig,
  ItemType,
  FlexiConfigDropDownItem,
  FlexiConfigItem,
  FormData
} from '../types/index';

type Props = {
  onSubmit: (formData: FormData) => void;
  config: FlexiConfig;
};

const Flexi = ({ onSubmit, config }: Props): JSX.Element => {
  const initialFormData: FormData = {};

  const generateInitialFormData = (items: FlexiConfigItem[]): void => {
    items.forEach(item => {
      initialFormData[item.name] = '';
      if (item.children) {
        generateInitialFormData(item.children.items);
      }
    });
  };

  generateInitialFormData(config.items);

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleFieldChange = (name: string, value: string): void => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(formData);
  };

  const renderField = (item: FlexiConfigItem): JSX.Element | null => {
    switch (item.type) {
      case ItemType.TextField:
        return (
          <TextField
            name={item.name}
            label={item.label}
            value={formData[item.name]}
            onChange={handleFieldChange}
            key={`${item.name}${item.type}`}
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
            key={`${item.name}${item.type}`}
          />
        );
      default:
        return null;
    }
  };

  const generateFields = (config: FlexiConfig): (JSX.Element | null)[] => {
    return config.items.reduce((fields: (JSX.Element | null)[], item) => {
      fields.push(renderField(item));
      if (item.children) {
        fields.push(...generateFields(item.children));
      }
      return fields;
    }, []);
  };

  const fields = generateFields(config);

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
