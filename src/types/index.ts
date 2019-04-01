export enum ItemType {
  TextField = 'TextField',
  DropDown = 'DropDown'
}

export interface FlexiConfigTextFieldItem {
  name: string;
  label: string;
  type: ItemType;
}

export interface FlexiConfigDropDownItem {
  name: string;
  label: string;
  type: ItemType;
  values: string[];
}

export interface FlexiConfig {
  items: (FlexiConfigTextFieldItem | FlexiConfigDropDownItem)[];
}

export interface FormData {
  [name: string]: string;
}
