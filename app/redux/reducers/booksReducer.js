import { fromJS } from 'immutable';


const initialState = fromJS({
  books: [],
  refresh: false,
  categorie: null,
  page: 1,
  book: null,
});

function booksReducer(state = initialState, action) {  

  switch (action.type) {

    case 'RECEIVE_BOOKS': {
        return state.withMutations(map => {
            map
            .set('categorie',action.payload.categorie)
            .set('page', action.payload.page)
            .set('books', fromJS(action.payload.books))
            .set('refresh', false);
        });
    }

    case 'REFRESH_POSTS':
        return state.set('refresh', true);


    case 'SINGLE_BOOK':
        return state.set('book', fromJS(action.payload.book));


    default:
      return initialState;


  }

}

export default booksReducer;