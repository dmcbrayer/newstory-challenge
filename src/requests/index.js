import { setUser, receiveRecipients } from '../actions'

export const signInUser = (email, password) => {
  let graphRequest = `
    mutation {
      signInUser(email: "${email}", password: "${password}") {
        token
        viewer {
          uuid
          firstName
          lastName
        }
      }
    }
  `

  return dispatch => {
    return postData(null, {query: graphRequest})
            .then(data => {
              console.log(JSON.stringify(data))
              let user = data.data.signInUser
              dispatch(setUser({...user.viewer, token: user.token}))
            })
            .catch(error => console.error(error))
  }
}

export const getRecipients = (authToken) => {
  let graphRequest = `
    query {
      recipients {
        uuid
        name
        submissionUuids
      }
    }
  `

  return dispatch => {
    return postData(authToken, { query: graphRequest })
            .then(data => {
              console.log(JSON.stringify(data))
              dispatch(receiveRecipients(data.data.recipients))
            })
            .catch(error => console.error(error))
  }
}

function postData(token = null, data = {}) {
  const url = "https://api-dev.newstory.io/graphql"
  const apiKey = "de1e8635d05db17456028e6153650041"

  return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
        'ACCEPT': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects
}


