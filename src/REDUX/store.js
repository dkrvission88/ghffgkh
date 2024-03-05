// import { createStore, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
// import rootreducer from './rootreducer';
// const store = createStore(
//   rootreducer,
//   applyMiddleware(thunk),
//   // {},
//   // window._REDUX_DEVTOOLS_EXTENSION_&& Window._REDUX_DEVTOOLS_EXTENSION_()
  
// );

// export default store;

//   applyMiddleware


import {  createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootreducer from './rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];



const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))

  
  
);

export default store;

//   applyMiddleware

// import { createStore, applyMiddleware, compose } from "redux";
// import { thunk } from 'redux-thunk';
// import rootreducer from './rootreducer';

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(
//   rootreducer,
//     composeEnhancers(
//         applyMiddleware(thunk)
//     )
// );
// export default store;