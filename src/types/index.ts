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

export interface MessageType {
  text: string,
  error: boolean
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

export interface IInitialState {
  message:  {
    error:boolean;
    text: string;
  };
  raws: number;
  status: string;
  photos: PhotoType[]
}
