import { combineReducers } from 'redux';
import booksReducer from './booksReducer'
import homeReducer from './homeReducer'


const appReducer = combineReducers({
    booksData: booksReducer,
    homeData: homeReducer,
});

export default appReducer;
