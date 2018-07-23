import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';

import AppBar from '@material-ui/core/AppBar';


export const HeaderContainer = styled.div`
  border: 2 solid red;
`;


export const AppBarStyle = styled(AppBar)`
  border: 2 solid red;
`;



export const ToolbarStyle = styled(Toolbar)`
  border: 2 solid red;
`;

export const StyledTypography = styled(Typography)`
  flex: 1;
  div {
    h2 {
      border: 1px solid red;
    }
  } 
`;



export const TextFieldStyle = styled(TextField)`
  color: #ffffff; 
`;
