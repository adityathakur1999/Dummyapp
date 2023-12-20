
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  signup: signupReducer,

});


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
