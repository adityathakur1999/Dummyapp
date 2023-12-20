import { SIGNUP_SUCCESS,SIGNUP_FAILURE,SIGNUP_REQUEST } from "../Constant/Constant";


export const signupRequest = (userData) => ({
    type: SIGNUP_REQUEST,
    payload: userData,
  });

  export const signupFailure=(error)=>({
    type:
    SIGNUP_FAILURE,
    payload: error,
  });
  export const signupSuccess=(data)=>{
    return {
        type:SIGNUP_SUCCESS,
        payload:data,
        
    }
  }