import Api from '../../services/Api';


const receiveBooks = (books) => ({
    type: 'RECEIVE_BOOKS',
    books,
});



export const refreshBooks = () => ({
    type: 'REFRESH_BOOKS',
});



export function getBooks() {

    return async dispatch => {

      const books = await Api.getBooks();

      if (books.ok) {     
        dispatch(receiveBooks(books.data));
      }

    };

  }