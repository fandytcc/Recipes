import ApiClient from '../../api/client'
import { loading, loadError } from './loading'
import { push as redirect } from 'react-router-redux'

export const USER_SIGN_IN = 'USER_SIGN_IN'
export const USER_SIGN_OUT = 'USER_SIGN_OUT'

const api = new ApiClient()

export const signUpUser = (user) => {
  return dispatch => {
    const path = '/users'
    dispatch(loading(path, true))

    api.post(path, user)
      .then(res => {
        dispatch(loading(path, false))
        dispatch(signInUser(user))
      })
      .catch(err => {
        dispatch(loading(path, false))
        dispatch(loadError(err))
      })
  }
}

export const signInUser = ({ email, password }) => {
    return dispatch => {
      const path ='/sessions'
      dispatch(loading(path, true))

      api.post(path, { email, password })
        .then(res => {
          dispatch(loading(path, false))
          dispatch(redirect('/'))
          api.storeToken(res.body.token) //store for future requests
          // localStorage.setItem('jwt', res.jwt)
          dispatch(fetchUserData())
        })
        .catch(err => {
          dispatch(loading(path, false))
          dispatch(loadError(err))
        })
    }
  }

  export const fetchUserData = () => {
    return dispatch => {
      const path ='/users/me'
      dispatch(loading(path, true))

      api.get(path)
        .then(res => {
          dispatch(loading(path, false))
          dispatch({
            type: USER_SIGN_IN,
            payload: res.body
          })
        })
        .catch(err => {
          dispatch(loading(path, false))
          dispatch(loadError(err))
        })
    }
  }
// catch(error) {
//       dispatch({
//         type: AUTHENTICATION_ERROR,
//         payload: 'Invalid email or password'
//       });
//     }

  export const signOutUser = (user) => {
    return dispatch => {
      api.removeToken()
      dispatch(redirect('/sign-in'))
      dispatch({
        type: USER_SIGN_OUT
      })
    }
  }
