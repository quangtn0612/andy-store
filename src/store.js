import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import reducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk]

// const asyncMiddleware = store => next => action => {
//   if (typeof action === 'function') {
//     return  action(next);
//   }
//   return next(action);
// }

const store = configureStore({reducer: reducer}, applyMiddleware(...middleware));
export default store;