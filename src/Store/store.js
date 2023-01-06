import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {persistStore} from 'redux-persist';
import reducer from './Reducers';

const appReducer = combineReducers(reducer);

let enhancer = compose(applyMiddleware(thunk, promise));

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const Store = createStore(rootReducer, enhancer);

export const persistor = persistStore(Store);

export default Store;
