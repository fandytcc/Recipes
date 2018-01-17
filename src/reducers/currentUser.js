import { USER_SIGN_IN } from '../actions/users/sign-in'
import { USER_SIGN_OUT } from '../actions/users/sign-out'


export default (state = null, { type, payload } = {}) => {
  switch(type) {
    case USER_SIGN_IN :
      return { ...payload }
      // return !!localStorage.jwt

    case USER_SIGN_OUT :
      return null

    default:
      return state
  }
}
