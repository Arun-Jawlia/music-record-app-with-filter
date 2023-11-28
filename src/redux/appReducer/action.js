import * as types from "./actionType";
import axios from 'axios'



const baseURL  = process.env.REACT_APP_BASE_URL 

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
    .get(`${baseURL}`,queryParams)
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


// Function to fetch data
export const updateMusicRecord = (id, payload) => dispatch=>
{

dispatch({type: types.UPDATE_MUSIC_RECORD_REQUEST})
  return axios.patch(`${baseURL}${id}`, payload)
  .then(res=>
    {
      dispatch({
        type: types.UPDATE_MUSIC_RECORD_SUCCESS,
        payload: res.data
      })
    })
    .catch(err=>
      {
        dispatch({type: types.UPDATE_MUSIC_RECORD_FAILURE})
      })

}