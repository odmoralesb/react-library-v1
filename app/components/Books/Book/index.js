import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBook, like } from '../../../redux/actions';
import Book from './Book';

const mapStateToProps = (state) => ({
  book: state.booksData.get('book'),
  refresh: state.booksData.get('refresh')
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getBook,
    like,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Book);