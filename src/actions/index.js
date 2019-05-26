 import * as constants from '../constants'

 /* User Actions
 ******************/

export const setUser = (user) => {
  return {
    type: constants.SET_USER,
    payload: user
  }
}
