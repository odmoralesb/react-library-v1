import Api from '../../services/Api';


const receiveBooks = (payload) => ({
    type: 'RECEIVE_BOOKS',
    payload,
});



const receiveSingleBook = (payload) => ({
    type: 'SINGLE_BOOK',
    payload,
});


const receiveCategorie = (payload) => ({
    type: 'SET_CATEGORIE',
    payload,
});


const refresh = (payload) => ({
    type: 'REFRESH_BOOKS',
    payload,
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

  
  export function setCategorie(name) {    

    return async dispatch => {      

      const payload = {
        categorie: name
      }

      dispatch(receiveCategorie(payload));

    };

  }





  export function refreshBook(value) {    

    return async dispatch => {      

      const payload = {
        refresh: value
      }

      dispatch(refresh(payload));

    };

  }









