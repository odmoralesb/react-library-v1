import React, { Component, Fragment } from 'react';


// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';

// import { HeaderContainer, StyledTypography } from './styles';





const Menu = () => (

  <Fragment>


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

  </Fragment>

);

export default Menu;