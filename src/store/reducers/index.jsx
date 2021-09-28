import { combineReducers } from "redux";
import user from './user';
import { headTitle } from './menu'

export default combineReducers({
    user,
    headTitle
});
