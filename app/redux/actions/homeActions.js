import Api from '../../services/Api';


const loadHome = ( payload ) => ( { type: 'LOAD_HOME', payload } );


export function getPosts() {    

  return async dispatch => {

    const latestPosts = await Api.latestPosts();
    const recommendedPosts = await Api.recommendedPosts();

    const payload = {
      latestPosts: latestPosts,
      recommendedPosts: recommendedPosts,
    }

    dispatch(loadHome(payload));

  };

}




