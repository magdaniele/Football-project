import { Dispatch, SetStateAction } from "react";

export interface SharedUiComponentsProps {
  title: string;
  showTitle?: boolean;
}
export  interface IndexProps {
  countries: [Country];
  setPage: Dispatch<SetStateAction<any[]>>;
}
export  interface Country {
  code: string;
  name: string;
  flag: string;
}