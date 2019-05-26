import * as constants from '../constants'

const init = { token: null }

export const user = (state = init, action) => {
  switch(action.type) {
    case constants.SET_USER:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }

}
