import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Pagination from 'react-js-pagination'



import Book from './Book';




import CardHeader from '@material-ui/core/CardHeader';
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


import { 
  PaginatorCustom, 
  Container, 
  BookItem, 
  FirsLetter, 
  CardMediaStyle,
  CardStyle 
} from './styles';

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



  getBook = (id) => {
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


        
        { books && (<h3>Lista de libros</h3>)}      
        


        <Container>

        {books && books.map((book, index) => {


           const avatar = book.getIn(['volumeInfo', 'authors', 0]) ? book.getIn(['volumeInfo', 'authors', 0]).substr(0, 1) : '?'

        
          return (
            <Fragment key={book.get('id')}>
                <BookItem>
                  <div>
                    <CardStyle>
                      <CardHeader avatar={
                          <Avatar aria-label="Recipe">
                            <FirsLetter>
                              { avatar }
                            </FirsLetter>
                          </Avatar>
                        }
                        action={
                          <IconButton onClick={ () => this.getBook( book.get('id') ) }>
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={ book.getIn(['volumeInfo', 'title']) }
                        subheader={ book.getIn(['volumeInfo', 'categories', 0]) }
                      />
                      <CardMediaStyle
                        image={book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])}
                      />
                    </CardStyle>
                  </div>

                </BookItem>
            </Fragment>
          )


        })}


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
