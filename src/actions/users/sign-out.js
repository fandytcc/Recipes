import ApiClient from '../../api/client'
import { push } from 'react-router-redux'

export const USER_SIGN_OUT = 'USER_SIGN_OUT'

const api = new ApiClient()

export default (user) => {
  return dispatch => {
    api.removeToken()
    dispatch(push('/sign-in'))
    dispatch({
      type: USER_SIGN_OUT
    })
  }
}
