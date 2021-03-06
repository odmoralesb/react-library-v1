import styled from 'styled-components';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

import TextField from '@material-ui/core/TextField';

export const PaginatorCustom = styled.div`
    width: 60%;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 10px;
        font-size: 14px;
        text-align: left;
        li {
            margin: auto 5px;
            font-size: 14px;
            color:#999999;
            list-style:none;
            padding: 2px;            
        };
        li.active {
            margin: auto 5px;
            font-size: 14px;            
            list-style:none;
            a {
                color:white;
                background-color: black;
                padding: 5px;
            }            
        };
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap
`;

export const BookItem = styled.div`
    margin: 20px;    
`;

export const FirsLetter = styled.div`
    &:first-letter { 
        text-transform: uppercase;
    }
`;



export const CardStyle = styled(Card)`
    width: 200px;
    height: 400px;
    margin-left: 15px;
`;



export const AvatarStyle = styled(Avatar)`
    background-color: red;
`;




export const CardMediaStyle = styled(CardMedia)`
    width: 100%;
    height: 100px;
    background-image: url('img_flowers.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`;



export const TextFieldStyle = styled(TextField)`

`;











