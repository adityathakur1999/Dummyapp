
import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { SIGNUP_FAILURE, SIGNUP_REQUEST,SIGNUP_SUCCESS } from '../Constant/Constant';

const API_URL = 'https://martsy.onrender.com/users/register';

function signupApi(userData) {
  return axios.post(API_URL, userData);
}

function* signupSaga(action) {
  try {
    const response = yield call(signupApi, action.payload);
    yield put({ type: SIGNUP_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE, payload: error });
  }
}

export function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
}
