import { combineReducers} from 'redux';
import {loginReducer} from './reducer';

const reducers = combineReducers ({
    reducer : loginReducer
});

export default reducers;