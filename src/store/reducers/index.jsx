import {combineReducers} from "redux";
import user from './user';
import {headTitle} from './menu'
import {merchantInfo} from './merchant'

export default combineReducers({
  user,
  headTitle,
  merchantInfo
});
