import { combineReducers } from "redux";
import photosReduser from './photos';
import rawsReduser from './raws';
import statusReduser from './status';
import messageReduser from './message';

const rootReducer = combineReducers({
  'photos': photosReduser,
  'raws': rawsReduser,
  'status': statusReduser,
  'message': messageReduser,
});

export default rootReducer;
