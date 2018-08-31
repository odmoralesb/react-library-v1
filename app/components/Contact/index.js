import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
  });

  class TextFields extends React.Component {

    state = {
      // name: 'Cat in the Hat',
      // age: '',
      // multiline: 'Controlled',
      // currency: 'EUR',
      normal: '50px'
    };

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    render() {
      const { classes } = this.props;
        return (
          <div>
              <CardMedia
                component="img"
                className={classes.media}
                height="140"
                image="/app/images/libros.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Gracias por su interes en nuestra Bibloteca en Linea.
                </Typography>
                <Typography component="p">
                  Si tiene alguna pregunta o comentario de productos o servicios, necesita atencion al cliente o desea hablar con algunos de nuestros asesores, rellene el siguiente formulario con sus datos de contacto y le estaremos respondiedo a la brevedad.
                </Typography>
            <form noValidate autoComplete="off" >
              <div>
                <TextField
                  id="name"
                  label="Nombre y Apellidos(*)"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  style={{ width: '350px' }}
                />
              </div>
              <div>
                <TextField
                  id="email"
                  label="Correo Electronico(*)"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  style={{ width: '350px' }}
                />
              </div>
              <div>
                <TextField
                  id="phone"
                  label="Telefono"
                  className={classes.textField}
                  value={this.state.phone}
                  onChange={this.handleChange('phone')}
                  margin="normal"
                  style={{ width: '350px' }}
                />
              </div>
              <div style={{ centerAlign: 'center' }}>
                <TextField
                  id="multiline-flexible"
                  label="Consulta y/o Comentario(*)"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  onChange={this.handleChange('multiline')}
                  className={classes.textField}
                  margin="normal"
                  style={{ width: '500px' }}
                />
              </div>
            </form>
            <Button variant="contained" color="primary" className={classes.button}>
              Send
              {/* <Icon className={classes.rightIcon}>send</Icon> */}
            </Button>
              </CardContent>
          </div>
        );
    }
  }

  TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(TextFields);