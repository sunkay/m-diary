import axios from 'axios';
import Config from '../config';

export const AUTH_USER = "AUTH_USER";
export const LOGIN = "LOGIN";
export function login({email, password}){
  return function(dispatch){
    // sign in with the auth server
    axios.post(`${Config.auth.url}/signin`, {email, password})
      .then(response => {
        // Update state to indicate authenticated user
        dispatch({type: AUTH_USER});
      })
      .catch(() => {
        console.log("Error signing in... ");
      });

  }
}

export const UNAUTH_USER = "UNAUTH_USER";
export function logout(){
  return{
    type: UNAUTH_USER,
  }
}
