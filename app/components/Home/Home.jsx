import React, { Component, Fragment } from 'react';
import  { Link } from 'react-router-dom';



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


class Home extends Component {

    componentDidMount() {
        this.props.getPosts();
    }
        

    render() {

        const { homeData } = this.props;

        const latestPosts = homeData.get('latestPosts');
        const recommendedPosts = homeData.get('recommendedPosts');
        const likes = homeData.get('likes');

        console.log('likes', likes);

        return (
        <Fragment>

            <h2>Ultimas publicaciones</h2>   

            <Container>
            {latestPosts && latestPosts.map((post) => {
                if (!post) return;
                const avatar = post.getIn(['volumeInfo', 'authors', 0]) ? post.getIn(['volumeInfo', 'authors', 0]).substr(0, 1) : '?'
                return (
                <Fragment key={post.get('id')}>
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
                            title={ post.getIn(['volumeInfo', 'title']) }
                            subheader={ post.getIn(['volumeInfo', 'categories', 0]) }
                        />
                        {post.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail']) ? (
                            <Link to={`/book/${post.get('id')}`}>
                            <CardMediaStyle 
                                image={post.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])}
                            />
                            </Link>
                        ) : (
                            <Link to={`/book/${post.get('id')}`}>{ post.get('id') }</Link>
                        )}
                        <CardContent>
                                <strong>Autores</strong>
                                <ul> 
                                {
                                post.getIn(['volumeInfo', 'authors']) && post.getIn(['volumeInfo', 'authors']).map((a, i) => {
                                    return (<li key={i}>{a}</li>)
                                })
                                }
                                </ul>
                        </CardContent>
                        </CardStyle>
                    </BookItem>
                </Fragment>);
            })}
            </Container>


            <h2>Publicaciones recomendadas</h2>

            <Container>
            {recommendedPosts && recommendedPosts.map((post) => {
                if (!post) return;
                const avatar = post.getIn(['volumeInfo', 'authors', 0]) ? post.getIn(['volumeInfo', 'authors', 0]).substr(0, 1) : '?'
                return (
                <Fragment key={post.get('id')}>
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
                            title={ post.getIn(['volumeInfo', 'title']) }
                            subheader={ post.getIn(['volumeInfo', 'categories', 0]) }
                        />
                        {post.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail']) ? (
                            <Link to={`/book/${post.get('id')}`}>
                            <CardMediaStyle 
                                image={post.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])}
                            />
                            </Link>
                        ) : (
                            <Link to={`/book/${post.get('id')}`}>{ post.get('id') }</Link>
                        )}
                        <CardContent>
                                <strong>Autores</strong>
                                <ul> 
                                {
                                post.getIn(['volumeInfo', 'authors']) && post.getIn(['volumeInfo', 'authors']).map((a, i) => {
                                    return (<li key={i}>{a}</li>)
                                })
                                }
                                </ul>
                        </CardContent>
                        </CardStyle>
                    </BookItem>
                </Fragment>);
            })}
            </Container>

            <h2>Me gusta</h2>

            {(likes.count() == 0) && (<p>Aun no tienes libros que te gusten</p>)}

            <Container>
            {likes && likes.map((post) => {
                if (!post) return;
                const avatar = post.getIn(['volumeInfo', 'authors', 0]) ? post.getIn(['volumeInfo', 'authors', 0]).substr(0, 1) : '?'
                return (
                <Fragment key={post.get('id')}>
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
                            title={ post.getIn(['volumeInfo', 'title']) }
                            subheader={ post.getIn(['volumeInfo', 'categories', 0]) }
                        />
                        {post.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail']) ? (
                            <Link to={`/book/${post.get('id')}`}>
                            <CardMediaStyle 
                                image={post.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail'])}
                            />
                            </Link>
                        ) : (
                            <Link to={`/book/${post.get('id')}`}>{ post.get('id') }</Link>
                        )}
                        <CardContent>
                                <strong>Autores</strong>
                                <ul> 
                                {
                                post.getIn(['volumeInfo', 'authors']) && post.getIn(['volumeInfo', 'authors']).map((a, i) => {
                                    return (<li key={i}>{a}</li>)
                                })
                                }
                                </ul>
                        </CardContent>
                        </CardStyle>
                    </BookItem>
                </Fragment>);
            })}
            </Container>
            
        </Fragment>
        );


    }

}

export default Home;