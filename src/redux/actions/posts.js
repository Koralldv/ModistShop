const PostsListAction = {
  setPosts: (items) => ({
    type: 'SET_POSTS',
    payload: items,
}),
  
  appendPosts: (items) => ({
    type: 'APPEND_POSTS',
    payload: items,
}),

  setLoadedPost: (payload) => ({
    type: 'SET_LOADED_POST',
    payload,
  }),

  onePost: (items) => ({
    type: 'ONE_POST',
    payload: items,
}),
fetchPostsId: (id) => async dispatch => {
  dispatch(PostsListAction.setLoadedPost(false))
      fetch(`https://my-json-server.typicode.com/Koralldv/demo/posts`)
      .then(response => response.json())
      .then(data => {
        dispatch(PostsListAction.appendPosts(data[id]));
      });
},
fetchPosts: () => async dispatch => {
  dispatch(PostsListAction.setLoadedPost(false))
      fetch(`https://my-json-server.typicode.com/Koralldv/demo/posts`)
      .then(response => response.json())
      .then(data => {
        dispatch(PostsListAction.setPosts(data));
      });
},
}

export default PostsListAction;