import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../redux/actions';
import Home from './Home';

const mapStateToProps = (state) => ({
  homeData: state.homeData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPosts,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
