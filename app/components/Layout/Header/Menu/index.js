import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCategorie } from '../../../../redux/actions';
import Menu from './Menu';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setCategorie,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);





