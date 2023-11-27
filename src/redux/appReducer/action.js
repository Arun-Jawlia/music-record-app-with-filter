import * as types from "./actionType";
import axios from 'axios'


export const getMusicRecordRequest = () => {
  return {
    type: types.GET_MUSIC_RECORD_REQUEST,
  };
};


// get music record failure
export const getMusicRecordFailure = () => {
  return {
    type: types.GET_MUSIC_RECORD_FAILURE,
  };
};


// get music record 
export const getMusicRecord =(queryParams)=> (dispatch) => {
  dispatch(getMusicRecordRequest());
  return axios
    .get("http://localhost:8080/albums",queryParams)
    .then((res) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(getMusicRecordFailure());
    });
};
