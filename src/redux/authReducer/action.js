import * as types from './actionType'
import axios from 'axios'


export const userLoginRequest = () =>
{
    return{
        type: types.USER_LOGIN_REQUEST
    }
}

export const userLoginSuccess = (payload ) =>
{
    return{
        type: types.USER_LOGIN_SUCCESS,
        payload
    }
}
export const userLoginFailure = ( ) =>
{
    return{
        type: types.USER_LOGIN_FAILURE
    }
}



// Function to login a user using reqres.in
export const userLogin = (payload)=>(dispatch) =>
{
    console.log(payload)
    dispatch(userLoginRequest())

    return axios({
        method: "post",
        url:'/api/login',
        baseURL: 'https://reqres.in',
        data:payload
    })
    .then(res=>
        {
           return dispatch(userLoginSuccess(res.data.token))
        })
        .catch(err=>
            {
                dispatch(userLoginFailure())
            })


}