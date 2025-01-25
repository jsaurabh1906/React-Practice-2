const authInitialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authReducerFn = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export { authInitialState, authReducerFn };
