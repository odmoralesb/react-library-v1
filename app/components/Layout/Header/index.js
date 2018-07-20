import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../../redux/actions';
import Header from './Header';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getBooks,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
