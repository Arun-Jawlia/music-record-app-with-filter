import * as types from "./actionType";

const initState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MUSIC_RECORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_MUSIC_RECORD_SUCCESS:
      return {
        ...state,
        musicRecords: payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_MUSIC_RECORD_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
