// We've looked at createStore so far from the redux package
// We are using two new methods; combineReducers and applyMiddleware
// As our store state grows, we want to be able to break up our reducer into multiple reducers that all handle only a piece of the state. That's where combine reducers comes in
// applyMiddleware is a function that will take any middleware we have defined or have installed and allow those functions to carry out what they need to as actions are dispatched
import { createStore, combineReducers, applyMiddleware } from 'redux';
// promiseMiddleware is a package that will allow us to handle asynchronous actions in our redux store effectively
import promiseMiddleware from 'redux-promise-middleware';
import postReducer from './postReducer';
import productsReducer from './productsReducer';

// invoking combineReducers and passing an object with the property names being equal to each reducer will create a root reducer that redux knows how to handle
let rootReducer = combineReducers({
  posts: postReducer,
  products: productsReducer
});

// Lastly, we export createStore passing in first our combined reducer that redux will use to keep track of all our pieces of store state.
// then we pass in applyMiddleware invoked passing through all middleware.
// In this case, promiseMiddleware will handle all asynchronous actions we dispatch
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
