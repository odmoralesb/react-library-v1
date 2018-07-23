import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Button from '@material-ui/core/Button';


import { 
    HeaderContainer, 
    StyledTypography, 
    TextFieldStyle, 
    ToolbarStyle, 
    AppBarStyle 
} from './styles';


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
        const { getBooks } = this.props;
        getBooks(1, categorie);
    }



    
    
      render() { 

        return (
            <HeaderContainer>
                <AppBarStyle position="static" style={{backgroundColor: '#000000'}}>
                    <ToolbarStyle>
                        <Menu getBooks = { this.props.getBooks } />
                        <StyledTypography variant="title" color="inherit">
                            React-Library
                        </StyledTypography>
                        <Button href="/" color="inherit">Home</Button>
                        <Button href="/contact" color="inherit">Acerca de</Button>
                    </ToolbarStyle>
                </AppBarStyle>
            </HeaderContainer>
        );


      }
    
    
    }






export default Header;