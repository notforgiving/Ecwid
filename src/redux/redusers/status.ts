import {DataAction} from './../../types';
import {actionsForStatus} from './../actions/status';

const initialState = 'none'

const statusReduser = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case actionsForStatus.LOADING:
      return 'loading';
    case actionsForStatus.OK:
      return 'ok';
    case actionsForStatus.NONE:
      return 'none';
    default:
      return state;
  }
};

export default statusReduser;
