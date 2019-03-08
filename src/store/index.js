import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//reducers
import user from './reducers/user';
import pokemon from './reducers/pokemon';
// console.log(defaultStore);

const store = createStore(
    combineReducers({user, pokemon}), 
    composeWithDevTools(applyMiddleware(thunk))
  )

export default store