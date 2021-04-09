export interface BaseAction {
  type: string;
}

export interface DataAction {
  type: string;
  payload: any;
}

export interface PhotoType {
  url: string,
  flexGrow: number
}

export interface iMessageProps {
  string: string;
  severity: "success" | "info" | "warning" | "error";
}

export interface RawProps {
  array: Array<PhotoType>;
  number: number;
}

export interface PhotoProps {
  photo: string;
  flexGrow: number;
  number: number;
}
