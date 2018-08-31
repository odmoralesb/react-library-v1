import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import { 
    Container, 
    BookItem, 
    FirsLetter, 
    CardMediaStyle,
    CardStyle,
    TypographyStyle 
  } from './styles';



class Book extends Component {

    static propTypes = {

    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { getBook } = this.props;
        getBook(id);
      }


    sendlike() {
        const { book, like } = this.props;
        like(book);
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

                                <CardContent>
                                    <h3>Descripcion</h3>
                                    <TypographyStyle paragraph>
                                        { book.getIn(['volumeInfo', 'description']) }
                                    </TypographyStyle>
                                </CardContent>

                            </CardStyle>
                            
                        </BookItem>

                    </Container>

                )}


                <button onClick={() => this.sendlike() }>Me gusta</button>

            </Fragment>

        );
    }

}

export default Book;




