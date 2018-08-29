import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Pagination from 'react-js-pagination'
import  { Link } from 'react-router-dom';


//import Book from './Book';


import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import { 
  PaginatorCustom, 
  Container, 
  BookItem, 
  FirsLetter, 
  CardMediaStyle,
  CardStyle,
  AvatarStyle,
  TextFieldStyle 
} from './styles';



class Books extends Component {

  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    booksData: ImmutablePropTypes.map.isRequired
  }
    
    
  componentDidMount() {
    const { categorie } = this.props.match.params;
    const { getBooks } = this.props;
    this.setState({ categorie })
    getBooks(1, categorie);
  }



  getAllBooks = () => {
    const { getBooks } = this.props;
    getBooks();
  }; 


  handleChangePage = (page) => {
      const { getBooks, booksData } = this.props;
      getBooks(page, booksData.get('categorie'));
  }


  state = {
    search: '',
    categorie: null
  };  
  

  onChange = (key, value) => {
    if (key == 'search') this.setState({ search: value });
  }




  render() {


    const { booksData } = this.props;
    const books = booksData.getIn(['books', 'items']);
    const page = booksData.get('page');
    const totalItems = booksData.getIn(['books', 'totalItems'])
    const pageSize = 10
    const totalPages = Math.floor(totalItems/pageSize);

    const { categorie } = this.props.match.params;

    //if (categorie && categorie != this.state.categorie) this.props.getBooks(1,categorie);
    //if (categorie != this.state.categorie) this.props.getBooks(1,categorie);

    return (
      <Fragment>


        { books && (

          <Fragment>

            <TextField
              id="search"
              label="Buscar"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder=""
              fullWidth
              margin="normal"
              onChange={ (e) => this.onChange('search', e.target.value) }
            />

            <Button 
            variant="contained" 
            style={{backgroundColor: '#000000', color: '#ffffff'}}
            onClick = {(e) => this.props.getBooks(1, this.state.search) }>
              Buscar
            </Button>

          </Fragment> 

        ) } 
        
                
        { books && (<h3>Lista de libros</h3>) } 


        <Container>

        {books && books.map((book, index) => {


          if (! book) return;


           const avatar = book.getIn(['volumeInfo', 'authors', 0]) ? book.getIn(['volumeInfo', 'authors', 0]).substr(0, 1) : '?'
        
          return (
            <Fragment key={book.get('id')}>
                <BookItem>

                    <CardStyle>

                      <CardHeader avatar={
                          <AvatarStyle aria-label="Recipe">
                            <FirsLetter>
                              { avatar }
                            </FirsLetter>
                          </AvatarStyle>
                        }
                        action={
                          <IconButton>
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={ book.getIn(['volumeInfo', 'title']) }
                        subheader={ book.getIn(['volumeInfo', 'categories', 0]) }
                      />

                      {book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail']) ? (
                        <Link to={`/book/${book.get('id')}`}>
                          <CardMediaStyle 
                            image={book.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])}
                          />
                        </Link>
                      ) : (

                        <Link to={`/book/${book.get('id')}`}>{ book.get('id') }</Link>

                      )}

                      <CardContent>

                            <strong>Autores</strong>

                            <ul> 
                            {
                              book.getIn(['volumeInfo', 'authors']) && book.getIn(['volumeInfo', 'authors']).map((a, i) => {
                                return (<li key={i}>{a}</li>)
                              })
                            }
                            </ul>

                      </CardContent>

                    </CardStyle>

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
                        totalItemsCount={ 220 }
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
