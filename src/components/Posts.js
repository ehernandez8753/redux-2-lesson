import React, { Component } from 'react';
// The connect method from react-redux is aware of what the store looks like. We need to import it to make our Posts component also aware of the store
import { connect } from 'react-redux';
// getPosts is the action creator function that we will dispatch our asynchronous api call with
import { getPosts } from '../ducks/postReducer';

class Posts extends Component {
  componentDidMount() {
    // In our componentDidMount, we will invoke this.props.getPosts which is given to us by the connect method below. If we just invoked getPosts it will invoke that function but will not actually dispatch an action to the redux store
    this.props.getPosts();
  }

  render() {
    // this.props.loading and this.props.posts are both available to us because of the react-redux connect method
    if (this.props.loading) return <div>Loading...</div>;
    return (
      <div>
        {this.props.posts.map(post => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// mapStateToProps will be passed the entire redux store object and we can decide what piece of the store this component needs to be made aware of
function mapStateToProps(state) {
  console.log('state passed to mapStateToProps', state);
  // mapStateToProps must return an object with the properties being whatever will be mapped to this components props. So this looks like (initially)
  // state.posts = { loading: false, posts: []}
  // then our Posts component has access to this.props = { loading: false, posts: []}
  return state.posts;
}

// connect will do specific optimization checks to make sure this component rerenders only when pieces of the store it cares about are changed and other things.
// we need to pass mapStateToProps so that function can be passed the state of the store.
// Then we pass an object with all of the action creator functions we want to dispatch
// connect will return a function after its done hooking up all of the state and actions. we then invoke that function passing through the Posts component which will then receive those things on props
export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
