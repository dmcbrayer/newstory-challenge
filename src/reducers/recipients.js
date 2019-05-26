import * as constants from '../constants'

const init = {};

export const recipients = (state = init, action) => {
  switch(action.type) {
    case constants.RECEIVE_RECIPIENTS:
      return {...state, ...normalizeRecipients(action.payload)}
    default:
      return state
  }
}

const normalizeRecipients = (recipients) => {
  let init = {}
  recipients.forEach(r => init[r.uuid] = r)
  return init
}

