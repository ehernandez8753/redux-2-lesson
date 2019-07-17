## Preclass

1. Start with refresher on board of redux

## Class 

1. Dive into pre built lesson
2. Point out to install redux, react-redux and redux-promise-middleware specifiying they are two different packages
3. Talk through setting up the store first 
4. Next, move into index.js and explain that we need a root Provider component that will keep track of the store and make it so that our child components in the tree are aware of the store
5. then move into the postReducer explaing that we still need some initial state and a reducer function. Show that we have one action type and then show that we have a switch statement that will look for cases with _pending, _fulfilled and _rejected
6. Now, move into showing the getPosts action creator and explain that will dispatct an action to the store. Show that posts is set to axios.get('/api/posts) and this will return a promise. Then explain that promiseMiddleware will detect this as an asynchronous action and then dispatch more actions to the reducer that we can handle
7. Move into Posts.js and talk about the connect method first. It is a method that gets invoked and will set up the props of our component. We can pass it a function that will take in the state of the store and then map that state to the props by returning an object. It also takes in an object with all of the dispatch functions that will be mapped to props to dispatch an action from the component.

- Explain that connect is a function that will return a function. That is why we invoke connect, then invoke again passing through the Component we want to wire props to

8. Move into talking about mapStateToProps and show what the passed through state object looks like. Explain that it looks that way because of combineReducers in our store.

9. Show the render method and console.log this.props to show that those values are coming from react-redux

10. lastly show the componentDidMount and show that this.props.getPosts is being invoked instead of the function that is imported from the reducer. If we just invoke the function brought in from the store then we dont actually dispatch an action