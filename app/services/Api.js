import { create } from 'apisauce';



const api = create({
  baseURL: 'https://www.googleapis.com',
  headers: { 'Content-Type': 'application/json' },
});

class Api {

  constructor() {

    this.headers = {
      'Content-Type': 'application/json',
    };

    this.url = 'https://www.googleapis.com';

  }

  async getBooks(index=0, categorie=null) {

    try {

      let response;

      if (categorie) {
        response = 
          await api.get(`/books/v1/volumes?q=${categorie}&filter=paid-ebooks&startIndex=${index}`);
      } else {
        response =  
          await api.get(`/books/v1/volumes?q=filter=paid-ebooks&startIndex=${index}`);
      }

      return response;


    } catch (e) {
      throw new Error(e);
    }

  }




  async latestPosts() {

    try {

      const response = 
        await api.get(`/books/v1/volumes?q=filter=paid-ebooks`);
        
      const books = (response.ok) ? response.data.items.slice(0, 4) : [];

      return books;

    } catch (e) {
      throw new Error(e);
    }
    
  }




  async recommendedPosts() {

    try {

      const index = Math.floor((Math.random() * 10) + 1);

      const response = 
        await api.get(`/books/v1/volumes?q=filter=paid-ebooks&startIndex=${index}`);

      const books = (response.ok) ? response.data.items.slice(0, 4) : [];

      return books;


    } catch (e) {
      throw new Error(e);
    }
    
  }







  async getBook(id) {

    try {

      const response = await api.get(`/books/v1/volumes/${id}`);
      return response;

    } catch (e) {
      throw new Error(e);
    }
  }



}

export default new Api();
