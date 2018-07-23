import styled from 'styled-components';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';



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
    width: 600px;
    height: 800px;
    margin-left: 15px;
`;




export const CardMediaStyle = styled(CardMedia)`
    width: 100%;
    height: 200px;
    background-image: url('img_flowers.jpg');
    background-repeat: no-repeat;
    background-size: contain;
`;