 import * as constants from '../constants'

 /* User Actions
 ******************/

export const setUser = (user) => {
  return {
    type: constants.SET_USER,
    payload: user
  }
}

/* Recipient Actions
********************/

export const receiveRecipients = (recipients) => {
  return {
    type: constants.RECEIVE_RECIPIENTS,
    payload: recipients
  }
}

