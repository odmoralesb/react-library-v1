import React, { Component, Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Payment from '@material-ui/icons/Payment';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import { 
    Container, 
    BookItem, 
    FirsLetter, 
    CardMediaStyle,
    CardStyle,
    TypographyStyle,
    CardActionsStyle, 
  } from './styles';



class Book extends Component {

    static propTypes = {

    }

    componentDidMount() {

        const { id } = this.props.match.params;
        const { getBook } = this.props;
        getBook(id);

        let likes = localStorage.getItem('likes');
        if (likes) {    
          likes = JSON.parse(likes);    
          if (likes.indexOf(id) != -1) {
            this.setState({ ilike: true })           
          }
        }

    }

    state = {
        ilike: false
    };    


    setLike () {
        const { book, like } = this.props;        
        like(book);
        this.setState({ilike:!this.state.ilike})
    }



    getLike() {
        return this.state.ilike ? {color: 'red'} : {color: 'gray'};
    }


    render() {  

        const { book } = this.props

        let avatar;

        if (book) {
            avatar = 
                book.getIn(['volumeInfo', 'authors', 0]) ? 
                    book.getIn(['volumeInfo', 'authors', 0]).substr(0, 1) : '?' 
        }
            


        return (
            <Fragment>

                {book && (

                    <Container>

                        <BookItem>
                            <CardStyle>
                                <CardHeader avatar={
                                    <Avatar aria-label="Recipe">
                                        <FirsLetter>
                                        { avatar }
                                        </FirsLetter>
                                    </Avatar>
                                    }
                                    title={ book.getIn(['volumeInfo', 'title']) }
                                    subheader={ book.getIn(['volumeInfo', 'subtitle']) }
                                />


                                {book.getIn(['volumeInfo', 'imageLinks', 'small']) && (
                                    <CardMediaStyle
                                    image={book.getIn(['volumeInfo', 'imageLinks', 'small'])}
                                    />
                                )}


                                <CardActionsStyle disableActionSpacing>

                                    <div onClick={() => this.setLike() }>
                                        <IconButton 
                                        aria-label="Agregar a favoritos" 
                                        style={this.getLike()}>
                                            <FavoriteIcon />
                                        </IconButton>
                                    </div>


                                    <a href="#">
                                        <IconButton 
                                        aria-label="Agregar a favoritos" 
                                        style={this.getLike()}>
                                            <Payment />
                                        </IconButton>
                                       
                                    </a>  

                                     <span>
                                        {book.getIn(['saleInfo', 'listPrice', 'amount'])}
                                    </span>                                  


                                </CardActionsStyle>



                                <CardContent>
                                    <h3>Descripción</h3>
                                    <div>
                                        { ReactHtmlParser(book.getIn(['volumeInfo', 'description'])) }
                                    </div>
                                </CardContent>



                            </CardStyle>
                            
                        </BookItem>

                    </Container>

                )}

                

            </Fragment>

        );
    }

}

export default Book;




