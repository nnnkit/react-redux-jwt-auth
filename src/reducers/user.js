const initialState = {
  user: null,
  isLoggedIn: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {...state, user: action.value.user, isLoggedIn: true};
      break;
    case 'USER_LOGOUT':
      return {...state, user: null, isLoggedIn: false};
      break;
    default:
      return state;
      break;
  }
}
