import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import CardActions from '@material-ui/core/CardActions';



export const Container = styled.div`
    margin: auto;
    width: 50%;
    padding: 10px;
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
    height: 300px;
    background-image: url('img_flowers.jpg');
    background-repeat: no-repeat;
    background-size: contain;
`;



export const TypographyStyle = styled(Typography)`
    text-align: justify;
    text-justify: inter-word;
`;



export const CardActionsStyle = styled(CardActions)`
    display: flex;
`;



