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
