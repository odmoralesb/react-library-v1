import React, { Component, Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Dropdown } from './style'




class Menu extends Component {
    
      render() { 


        return (
            

            <Fragment>
                <Dropdown> 
                    <MenuIcon />
                    <div>
                        <a href="/literatura">Literatura</a>
                        <a href="/romantica">Romantica</a>
                        <a href="/fantasia">Fantasia</a>
                        <a href="/infantil">Infantil</a>
                        <a href="/ocio">Ocio</a>
                        <a href="/salud">Salud</a>
                        <a href="/pensamiento">Pensamiento</a>
                        <a href="/religion">Religion</a>
                        <a href="/actualidad">Actualidad</a>
                    </div>
                </Dropdown>
            </Fragment>

        );


      }
    
    
    }


    
export default Menu;





