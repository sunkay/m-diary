
export const LOGIN = "LOGIN";
export function login(){
  return{
    type: LOGIN,
    payload: {
      authenticated: true
    }
  }
}

export const LOGOUT = "LOGOUT";
export function logout(){
  return{
    type: LOGOUT,
    payload: {
      authenticated: false
    }
  }
}
