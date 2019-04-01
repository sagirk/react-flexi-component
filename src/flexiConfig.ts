import { FlexiConfig, ItemType } from './types/index';

const flexiConfig: FlexiConfig = {
  items: [
    {
      name: 'person_name',
      label: "Person's Name",
      type: ItemType.TextField
    },
    {
      name: 'states',
      label: "Person's State",
      type: ItemType.DropDown,
      values: ['Maharashtra', 'Kerala', 'Tamil Nadu']
    }
  ]
};

export default flexiConfig;
