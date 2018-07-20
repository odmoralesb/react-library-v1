import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Pagination from 'react-js-pagination'

import { PaginatorCustom } from './styles';

import Book from './Book';

class Books extends Component {

  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    getBook: PropTypes.func.isRequired,
    booksData: ImmutablePropTypes.map.isRequired
  }



  handleChangePage = (page) => {
      const { getBooks, booksData } = this.props;
      getBooks(page, booksData.get('categorie'));
  }



  grtBook = (id) => {
    const { getBook } = this.props
    getBook(id)
  }





  render() {


    const { booksData } = this.props;
    const books = booksData.getIn(['books', 'items']);
    const page = booksData.get('page');
    const totalItems = booksData.getIn(['books', 'totalItems'])
    const pageSize = 10
    const totalPages = Math.floor(totalItems/pageSize);


    console.log('totalPages:', totalPages);
    console.log('booksData:', booksData);


    return (
      <Fragment>


        <Book />


        <h3>Lista de libros</h3>

        {books && books.map((book, index) => (<Fragment key={book.get('id')}>

          <div>

            <h5>{index + 1} - { book.getIn(['volumeInfo', 'title']) }</h5>

            <div onClick = {(e) => this.grtBook( book.get('id') ) } >
              <img src={book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])} />
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

      </Fragment>
      );
  }


}

export default Books;
