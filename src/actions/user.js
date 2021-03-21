export function setUserData(userData) {
  return {
    type: "SET_USER_DATA",
    userData 
  }
}

export function successLogin() {
  return {
    type: "SUCCESS_LOGIN"
  }
}

export function logout() {
  return {
    type: "LOGOUT"
  }
}
