import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../redux/actions';
import Books from './Books';

const mapStateToProps = (state) => ({
  booksData: state.booksData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getBooks,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Books);
