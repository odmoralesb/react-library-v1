import React, { Component, Fragment } from 'react';

import Pagination from 'react-js-pagination'

import PropTypes from 'prop-types';

import { PaginatorCustom } from './styles';


class Books extends Component {

  static propTypes = {
    getBooks: PropTypes.func.isRequired,
  }


  componentDidMount() {
    this.getAllBooks();
  }


  getAllBooks = () => {
    const { getBooks } = this.props;
    getBooks();
  };


  handleChangePage = (page) => {
      const { getBooks, booksData } = this.props;
      getBooks(page, booksData.get('categorie'));
  }


  handleChangeCategorie = (categorie) => {
      const { getBooks } = this.props;
      getBooks(1, categorie);
  }


  render() {


    const { booksData } = this.props;
    const books = booksData.getIn(['books', 'items']);
    const page = booksData.get('page');
    const totalItems = booksData.getIn(['books', 'totalItems'])
    const pageSize = 10
    const totalPages = Math.floor(totalItems/pageSize);


    console.log('respuesta:', totalPages);
    console.log('booksData:', booksData);


    return (<Fragment>

      <div>
          <a href="#" onClick={ () => this.handleChangeCategorie('finanzas') }>Finanzas</a>
      </div>

      <div>
          <a href="#" onClick={ () => this.handleChangeCategorie('deporte') }>Deporte</a>
      </div>

      <div>
          <a href="#" onClick={ () => this.handleChangeCategorie('carros') }>Carros</a>
      </div>


      <div>
          <a href="#" onClick={ () => this.handleChangeCategorie('educacion') }>Educacion</a>
      </div>


      <h3>Lista de libros</h3>

      {books && books.map((book, index) => (<Fragment key={book.get('id')}>

        <div>

          <h5>{index + 1} - { book.getIn(['volumeInfo', 'title']) }</h5>

          <div>

            <a href={`/${book.get('id')}`}>
                <img src={book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])} />
            </a>

          </div>




        </div>


      </Fragment>))}

        {
            (pageSize < totalItems &&
                <PaginatorCustom>
                    <Pagination
                        activePage={ page }
                        itemsCountPerPage={pageSize}
                        totalItemsCount={ totalItems }
                        pageRangeDisplayed={ 10 }
                        onChange={ this.handleChangePage }
                        firstPageText=" << "
                        prevPageText=" < "
                        nextPageText=" > "
                        lastPageText=" >> "
                    />
                </PaginatorCustom>
            )
        }

    </Fragment>);
  }


}

export default Books;
