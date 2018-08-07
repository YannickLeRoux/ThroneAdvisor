import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DisplayReducer from './DisplayReducer';

export default combineReducers({
    auth: AuthReducer,
    display: DisplayReducer
});