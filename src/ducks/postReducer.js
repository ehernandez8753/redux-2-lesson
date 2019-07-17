import axios from 'axios';

const GET_POSTS = 'GET_POSTS';

let initialState = {
  loading: false,
  posts: []
};

// This action will make an axios call to our server which will return a promise. Without promiseMiddleware, we would immediately return an object whose payload is just a promise, not the posts returned from the server. Then our reducer would set posts to that promise and everything would break
export const getPosts = () => {
  let posts = axios.get('/api/posts').then(res => res.data);
  return {
    type: GET_POSTS,
    payload: posts
  };
};

// promiseMiddleware will automatically append the following values to an asynchronous action
// _PENDING, _FULFILLED, _REJECTED
// The _PENDING action will be dispatched when our promise is still a promise and waiting on a response
// The _FULFILLED action type will be dispatched when our promise has fulfilled without errors and has our posts
// the _REJECTED action type will be dispatched if there were errors with our axios call or we got a status code that indicates an error
// We can set the state of our reducers slice of the store according to the action type dispatched
export default function(state = initialState, action) {
  console.log(action);
  let { type, payload } = action;
  switch (type) {
    case GET_POSTS + '_PENDING':
      return { ...state, loading: true };
    case GET_POSTS + '_FULFILLED':
      return { posts: payload, loading: false };
    default:
      return state;
  }
}
