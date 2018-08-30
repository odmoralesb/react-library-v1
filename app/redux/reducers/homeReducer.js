import { fromJS } from 'immutable';


const initialState = fromJS({
  latestPosts: [],
  recommendedPosts: [],
  likes: [],
});

function homeReducer(state = initialState, action) { 

  switch (action.type) {    

    case 'LOAD_HOME': {
        return state.withMutations(map => {
            map
            .set('latestPosts', fromJS(action.payload.latestPosts))
            .set('recommendedPosts', fromJS(action.payload.recommendedPosts))
        });
    }

    default:
      return initialState;

  }

}

export default homeReducer;