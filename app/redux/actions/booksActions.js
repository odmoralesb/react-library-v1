import Api from '../../services/Api';


const receiveBooks = (payload) => ({
    type: 'RECEIVE_BOOKS',
    payload,
});



const receiveSingleBook = (payload) => ({
    type: 'SINGLE_BOOK',
    payload,
});



export const refreshBooks = () => ({
    type: 'REFRESH_BOOKS',
});



export function getBooks(page=1, categorie=null) {    

    return async dispatch => {

      const index = (page-1) * 10

      const books = await Api.getBooks(index, categorie);

      const payload = {
        categorie,
        page,
        books: books.data
      }


      dispatch(receiveBooks(payload));


    };

  }




  export function getBook(id) {    

    return async dispatch => {

      const book = await Api.getBook(id);



      const payload = {
        book: book.data
      }


      dispatch(receiveSingleBook(payload));

    };

  }