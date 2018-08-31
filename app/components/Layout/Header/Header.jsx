import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';


import { 
    HeaderContainer, 
    StyledTypography, 
    ToolbarStyle, 
    AppBarStyle 
} from './styles';


import Menu from './Menu';


class Header extends Component {   

    
      render() { 

        return (
            <HeaderContainer>
                <AppBarStyle position="static" style={{backgroundColor: '#000000'}}>
                    <ToolbarStyle>
                        <Menu />
                        <StyledTypography variant="title" color="inherit">
                            React-Library
                        </StyledTypography>
                        <Button href="/" color="inherit">Home</Button>
                        <Button href="/contact" color="inherit">Contactenos</Button>
                        {/* <Button href="/about" color="inherit">Acerca de</Button> */}
                    </ToolbarStyle>
                </AppBarStyle>
            </HeaderContainer>
        );


      }
    
    
    }

export default Header;