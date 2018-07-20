import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Pagination from 'react-js-pagination'

import { PaginatorCustom, Container, BookItem, FirsLetter } from './styles';

import Book from './Book';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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


        <Container>

        {books && books.map((book, index) => (
        
          <Fragment key={book.get('id')}>
              <BookItem>




                <div>
                  <Card>
                  <CardHeader avatar={
                      <Avatar aria-label="Recipe">
                        <FirsLetter>
                          { book.getIn(['volumeInfo', 'title']).substring(0, 1) }
                        </FirsLetter>
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={ book.getIn(['volumeInfo', 'title']) }
                    subheader={ book.getIn(['volumeInfo', 'authors',0]) }
                  />
                  <CardMedia
                    image={book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])}
                  />
                  </Card>
                </div>



                {/* <h5>{index + 1} - { book.getIn(['volumeInfo', 'title']) }</h5>

                <div onClick = {(e) => this.grtBook( book.get('id') ) } >
                  <img src={book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])} height='200px' width='130px' />
                </div>                 */}









              </BookItem>
          </Fragment>))}


        </Container>

      

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
