import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks, getBook } from '../../redux/actions';
import Books from './Books';

const mapStateToProps = (state) => ({
  booksData: state.booksData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getBooks,
    getBook,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Books);
