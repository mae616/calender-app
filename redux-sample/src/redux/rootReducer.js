import { combineReducers } from 'redux';
import { count } from './count/reducer';

// redux で store を作成するために、すべての reducer を一つにまとめる
const rootReducer = combineReducers({ count });

export default rootReducer;