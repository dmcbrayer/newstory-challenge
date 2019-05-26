import React from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../requests/index'

let LoginForm = ({ dispatch }) => {
  let username, password

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        console.log("username:", username.value)
        console.log("password:", password.value)

        dispatch(signInUser(username.value, password.value))
      }}>
        <input ref={node => username = node} type="text" />
        <input ref={node => password = node} type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

LoginForm = connect()(LoginForm)

export default LoginForm
