export const userInitialState = {
  users: [],
  isLoading: false,
  error: null,
  searchQuery: "",
};

const userReducerFn = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_USERS":
      return { ...state, isLoading: false, users: action.payload };
    case "SET_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default userReducerFn;
