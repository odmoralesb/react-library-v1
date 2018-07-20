import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { HeaderContainer, StyledTypography } from './styles';


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
        const { getBooks } = this.props;
        getBooks(1, categorie);
    }



    
    
      render() { 

        return (
            <HeaderContainer>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <StyledTypography variant="title" color="inherit">
                            React-Library
                        </StyledTypography>
                        <Button href="/" color="inherit">Home</Button>
                        <Button href="/contact" color="inherit">Acerca de</Button>
                    </Toolbar>
                </AppBar>


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

            </HeaderContainer>
        );


      }
    
    
    }






export default Header;