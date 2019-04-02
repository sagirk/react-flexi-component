export enum ItemType {
  TextField = 'TextField',
  DropDown = 'DropDown'
}

export interface FlexiConfigTextFieldItem {
  name: string;
  label: string;
  type: ItemType;
  children?: FlexiConfig;
}

export interface FlexiConfigDropDownItem {
  name: string;
  label: string;
  type: ItemType;
  values: string[];
  children?: FlexiConfig;
}

export type FlexiConfigItem =
  | FlexiConfigTextFieldItem
  | FlexiConfigDropDownItem;

export interface FlexiConfig {
  items: FlexiConfigItem[];
}

export interface FormData {
  [name: string]: string;
}
