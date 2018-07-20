import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const HeaderContainer = styled.div`
  flex-grow: 1;
  background-color: #000000;
`;

export const StyledTypography = styled(Typography)`
  flex: 1;

  div {


    h2 {
      border: 1px solid red;
    }


  }

 
`;
