import { BaseAction, DataAction, MessageType } from "../../types";

export enum actionsForMessage {
  SET_MESSAGE = "SET_MESSAGE",
  CLEAN_MESSAGE = "CLEAN_MESSAGE",
}

export const cleanMessage = (): BaseAction => ({
  type: actionsForMessage.CLEAN_MESSAGE,
});

export const setMessage = (message: MessageType): DataAction => ({
  type: actionsForMessage.SET_MESSAGE,
  payload: message,
});
