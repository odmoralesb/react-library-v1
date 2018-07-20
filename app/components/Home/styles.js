import styled from 'styled-components';

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
                background-color: blue;
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











