
export function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

export function getToken() {
  const tokenString = sessionStorage.getItem('token');
  console.log(tokenString)
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}