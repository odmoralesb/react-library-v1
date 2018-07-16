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

  async getBooks() {
    try {

      const response = await api.get('/books/v1/volumes?q=Finanzas');
      return response;

    } catch (e) {
      throw new Error(e);
    }
  }


}

export default new Api();
