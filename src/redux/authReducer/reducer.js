import * as types from "./actionType";

const initState = {
  isAuth: false,
  isToken: null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isToken: payload,
        isError: false,
        isAuth: true,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth:false,
        isToken:null
      };

    default:
      return state;
  }
};
