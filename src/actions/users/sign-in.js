import ApiClient from '../../api/client'
import { push } from 'react-router-redux'

export const USER_SIGN_IN = 'USER_SIGN_IN'

const api = new ApiClient()

export default (user) => {
  return dispatch => {

    api.post('sessions', { ...user })
      .then((res) => {
        api.storeToken(res.body.token)
        // localStorage.setItem('jwt', res.jwt)

        api.get('users/me')
          .then((res) => {
            dispatch({
              type: USER_SIGN_IN,
              payload: res.body
            })

            dispatch(push('/'))
          })
          .catch((err) => console.error(err))
      })
      .catch(err => console.error(err))
  }
}

// catch(error) {
//       dispatch({
//         type: AUTHENTICATION_ERROR,
//         payload: 'Invalid email or password'
//       });
//     }
