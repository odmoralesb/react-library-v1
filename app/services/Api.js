import { create } from 'apisauce';
import { trans } from '../utils/trans';



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
          await api.get(`/books/v1/volumes?q=${categorie}&startIndex=${index}`);
      } else {
        response =  
          await api.get(`/books/v1/volumes?q=finanzas,deportes,carros,educacion&startIndex=${index}`);
      }

      return response;


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
