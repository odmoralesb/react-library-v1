import Api from '../../services/Api';


const loadHome = ( payload ) => ( { type: 'LOAD_HOME', payload } );


export function getPosts() {    

  return async dispatch => {

    const latestPosts = await Api.latestPosts();
    const recommendedPosts = await Api.recommendedPosts();
    const likes = [];
    let ids = localStorage.getItem('likes');   


    if (ids) {

      ids = JSON.parse(ids);

      const P = []
      ids.forEach(id => {
        P.push(Api.getBook(id));
      })

      const reslikes = await Promise.all(P);

      reslikes.forEach(res => {
        if (res.ok) likes.push(res.data);
      })

    } 

    const payload = {
      latestPosts,
      recommendedPosts,
      likes
    }

    dispatch(loadHome(payload));

  };

}


export function like(book) {

  return async () => {

    const bookjs = book.toJS();
    const id = bookjs.id;
    let likes = localStorage.getItem('likes');

    if (likes) {

      likes = JSON.parse(likes);

      const index = likes.indexOf(id);

      if (index == -1) {
        likes.push(id);
      } else {
        likes.splice(index, 1);
      }
      
      localStorage.setItem('likes', JSON.stringify(likes));

    } else {
      likes = [id];
      localStorage.setItem('likes', JSON.stringify(likes)); 
    }

  };



}









