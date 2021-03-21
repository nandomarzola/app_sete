let user = JSON.parse(localStorage.getItem('app@user'));

const INITIAL_STATE = {
  user: user ? user : '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.userData 
        }
      }
    case "SUCCESS_LOGIN":
      let user = JSON.parse(localStorage.getItem('app@user'));

      return {
        ...state,
        user: user,
      }

    case "LOGOUT":
      localStorage.removeItem('app@user');

      return {
        user: {},
      };

    default:
      return state;
  }
}