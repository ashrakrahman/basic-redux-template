//Action creators
export const setUsersAction = (users) => ({
  type: "SET_USERS",
  users,
});

export const initialState = {
  users: [],
};

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
      break;

    default:
      return state;
  }
}

//Selector
export const getUsers = (state) => {
  return state.users;
};
