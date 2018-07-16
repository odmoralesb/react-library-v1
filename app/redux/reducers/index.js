import { combineReducers } from 'redux';
import booksReducer from './booksReducer'


const appReducer = combineReducers({
    booksData: booksReducer,
});

export default appReducer;
