import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (userData) => async (dispatch) => {
    try {
      const { data } = await api.signIn(userData);
  
      dispatch({ type: AUTH, data });
  
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (userData) => async (dispatch) => {
    try {
      const { data } = await api.signUp(userData);
  
      dispatch({ type: AUTH, data });
  
    } catch (error) {
      console.log(error);
    }
  };