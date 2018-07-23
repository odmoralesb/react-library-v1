import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


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
    Container, 
    BookItem, 
    FirsLetter, 
    CardMediaStyle,
    CardStyle 
  } from './styles';



class Book extends Component {

    static propTypes = {

    }

    render() {

        const { book } = this.props;



        let avatar;

        if (book) {

            avatar = book.getIn(['volumeInfo', 'authors', 0]) ? book.getIn(['volumeInfo', 'authors', 0]).substr(0, 1) : '?' 

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

                                <CardMediaStyle
                                    image={ book.getIn(['volumeInfo', 'imageLinks', 'small'])  }
                                />

                                <CardContent>
                                    <Typography paragraph>
                                        { book.getIn(['volumeInfo', 'description']) }
                                    </Typography>
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




