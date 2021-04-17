import { DataAction } from "./../../types";
import { actionsForMessage } from "./../actions/message";

const initialState = {
  text: "",
  error: false,
};

const messageReduser = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case actionsForMessage.CLEAN_MESSAGE: {
      const newState = initialState;
      return newState;
    }
    case actionsForMessage.SET_MESSAGE: {
      const newState = {
        text: action.payload.text,
        error: action.payload.error,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default messageReduser;
