import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

function refreshPage() {
  window.location.reload(false);
}

export const signin = (userData) => async (dispatch) => {
    try {
      const { data } = await api.signIn(userData);
  
      dispatch({ type: AUTH, payload:data });
      console.log("api", data)
      refreshPage()
  
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (userData) => async (dispatch) => {
    try {
      const { data } = await api.signUp(userData);

      dispatch({ type: AUTH, payload: data });
      refreshPage()
  
    } catch (error) {
      console.log(error);
    }
  };