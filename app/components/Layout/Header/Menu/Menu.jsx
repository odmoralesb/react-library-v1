import React, { Component, Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Dropdown } from './style'
import  { Link } from 'react-router-dom';

class Menu extends Component {


    handleChangeCategorie = (name) => {
        this.props.setCategorie(name)
    }
    
      render() {

        return (
            

            <Fragment>
                <Dropdown> 
                    <MenuIcon />
                    <div>
                        <Link to={'/categorie/literatura'} onClick = {()=>this.handleChangeCategorie('literatura')} >Literatura</Link>
                        <Link to={'/categorie/romantica'} onClick = {()=>this.handleChangeCategorie('romantica')} >Romantica</Link>
                        <Link to={'/categorie/fantasia'} onClick = {()=>this.handleChangeCategorie('fantasia')} >Fantasia</Link>
                        <Link to={'/categorie/infantil'} onClick = {()=>this.handleChangeCategorie('infantil')} >Infantil</Link>
                        <Link to={'/categorie/ocio'} onClick = {()=>this.handleChangeCategorie('ocio')} >Ocio</Link>
                        <Link to={'/categorie/salud'} onClick = {()=>this.handleChangeCategorie('salud')} >Salud</Link>
                        <Link to={'/categorie/pensamiento'} onClick = {()=>this.handleChangeCategorie('pensamiento')} >Pensamiento</Link>
                        <Link to={'/categorie/religion'} onClick = {()=>this.handleChangeCategorie('religion')} >Religion</Link>
                        <Link to={'/categorie/actualidad'} onClick = {()=>this.handleChangeCategorie('actualidad')} >Actualidad</Link>
                    </div>
                </Dropdown>
            </Fragment>

        );


      }
    
    
    }


    
export default Menu;

