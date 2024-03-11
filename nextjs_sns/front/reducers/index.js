const intialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  posts: {
    mainPosts: [],
  },
};

export const loginAction = (data) => {
  return {
    type: "LOGIN_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOGIN_OUT",
  };
};

// const changenickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };
// // const changenickname = {
// //   type: "CHANGE_NICKNAME",
// //   data: "changeman",
// // };

//(이전상태,액션) => 다음상태
const rootReducers = (state = intialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      //state.name = "changeman";
      return {
        ...state,
        name: action.data,
      };
    case "LOGIN_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOGIN_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
      break;
  }
};

export default rootReducers;
