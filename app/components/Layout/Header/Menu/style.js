import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Dropdown  = styled.div`


    position: relative;
    display: inline-block;

    div {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;    

        a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
    }


    &:hover { 
        div { display: block }
     }



`;

