import React, { Component, Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Dropdown } from './style'


class Menu extends Component {


    handleChangeCategorie = (categorie) => {
        const { getBooks } = this.props;
        getBooks(1, categorie);
    }

    
    
    
      render() { 




        return (
            

            <Fragment>    

                <Dropdown> 

                    <MenuIcon />     
                    
                    <div>
                        <a href="#" onClick = { () => this.handleChangeCategorie('literatura') }>Literatura</a>
                        <a href="#" onClick = { () => this.handleChangeCategorie('romantica') } >Romantica</a>
                        <a href="#" onClick = { () => this.handleChangeCategorie('fantasia') }>Fantasia</a>
                        <a href="#" onClick = { () => this.handleChangeCategorie('infantil') }>Infantil</a>
                        <a href="#" onClick = { () => this.handleChangeCategorie('ocio') }>Ocio</a>
                        <a href="#" onClick = { () => this.handleChangeCategorie('salud') } >Salud</a>
                        <a href="#" onClick = { () => this.handleChangeCategorie('pensamiento') }>Pensamiento</a>
                        <a href="#" onClick = { () => this.handleChangeCategorie('religion') }>Religion</a>
                        <a href="#" onClick = { () => this.handleChangeCategorie('actualidad') }>Actualidad</a>
                    </div>

                </Dropdown>

            </Fragment>



        );


      }
    
    
    }


    
export default Menu;





