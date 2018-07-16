import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { HeaderContainer, StyledTypography } from './styles';

const Header = () => (
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
  </HeaderContainer>
);

export default Header;
