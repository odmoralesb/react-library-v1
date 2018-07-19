import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBook } from '../../../redux/actions';
import Book from './Book';

console.log('index para single book');

const mapStateToProps = (state) => ({
  book: state.booksData.get('book'),
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getBook,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Book);