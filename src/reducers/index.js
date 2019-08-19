import clickReducer from './clickReducer';
//import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
    clickReducer
    //clickState: clickReducer,
    //otherState: otherReducer
});