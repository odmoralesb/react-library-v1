import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { HeaderContainer, StyledTypography } from './styles';


import Menu from './Menu';


class Header extends Component {
    
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


    handleChangeCategorie = (categorie) => {


        console.log('handle Categoria en header', categorie)

        const { getBooks } = this.props;
        getBooks(1, categorie);
    }



    
    
      render() { 

        return (
            <HeaderContainer>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Menu getBooks = { this.props.getBooks } />
                        <StyledTypography variant="title" color="inherit">
                            React-Library
                        </StyledTypography>
                        <Button href="/" color="inherit">Home</Button>
                        <Button href="/contact" color="inherit">Acerca de</Button>
                    </Toolbar>
                </AppBar>
            </HeaderContainer>
        );


      }
    
    
    }






export default Header;