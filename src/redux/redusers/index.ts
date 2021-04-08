import { combineReducers } from "redux";
import photosReduser from './photos';
import rawsReduser from './raws';
import statusReduser from './status';

const rootReducer = combineReducers({
  'photos': photosReduser,
  'raws': rawsReduser,
  'status': statusReduser,
});

export default rootReducer;
