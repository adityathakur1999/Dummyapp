import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import signupReducer from '../Reducer/SignupReducers';
import { watchSignup } from '../Saga/SagaSignup';
import { configureStore,Tuple } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: signupReducer,
    middleware: () => new Tuple(sagaMiddleware ),
  })
sagaMiddleware.run(watchSignup);

export default store;


