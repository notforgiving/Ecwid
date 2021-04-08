import {DataAction} from '../../types';
import {actionsForRaw} from './../actions/raws';

const initialState = 5

const rawsReduser = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case actionsForRaw.SET_PHOTO_IN_RAW:
      return action.payload
    default:
      return state;
  }
};

export default rawsReduser;
