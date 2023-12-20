
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../Constant/Constant'

const initialState = {
  data: null,
  error: null,
};

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
