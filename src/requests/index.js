import { setUser } from '../actions'

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
    return postData({query: graphRequest})
            .then(data => {
              console.log(JSON.stringify(data))
              dispatch(setUser({...data.data.signInUser.viewer, token: data.data.signInUser.token}))
            })
            .catch(error => console.error(error))
  }
}

function postData(data = {}) {
  const url = "https://api-dev.newstory.io/graphql"
  const apiKey = "de1e8635d05db17456028e6153650041"

  return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
        'ACCEPT': 'application/json'
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects
}
