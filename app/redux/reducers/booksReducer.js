import { fromJS } from 'immutable';


const initialState = fromJS({
  books: [],
  refresh: false,
});

function booksReducer(state = initialState, action) {

  switch (action.type) {


    case 'RECEIVE_BOOKS': {
        return state.withMutations(map => {
            map
            .set('books', fromJS(action.books))
            .set('refresh', false);
        });
    }

    case 'REFRESH_POSTS':
        return state.set('refresh', true);


    default:
      return initialState;


  }

}

export default booksReducer;