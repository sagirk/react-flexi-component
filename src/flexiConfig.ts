import { FlexiConfig, ItemType } from './types/index';

export const normalFlexiConfig: FlexiConfig = {
  items: [
    {
      name: 'name',
      label: "Person's Name",
      type: ItemType.TextField
    },
    {
      name: 'state',
      label: "Person's State",
      type: ItemType.DropDown,
      values: ['Maharashtra', 'Kerala', 'Tamil Nadu']
    }
  ]
};

export const recursiveFlexiConfig: FlexiConfig = {
  items: [
    {
      name: 'title',
      label: "Person's Title",
      type: ItemType.TextField,
      children: normalFlexiConfig
    },
    {
      name: 'hobbies',
      label: "Person's Hobbies",
      type: ItemType.TextField
    }
  ]
};
