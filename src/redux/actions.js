import jwtDecode from 'jwt-decode';


export function setUserAction(token) {
  const user = jwtDecode(token)
  localStorage.setItem('token', token)
  return {
    type: 'SET_USER',
    payload: { token, user}
  }
}