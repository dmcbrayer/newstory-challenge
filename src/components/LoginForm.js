import React from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../requests/index'

let LoginForm = ({ dispatch }) => {
  let username, password

  return (
    <div className="mt-4">
      <form onSubmit={e => {
        e.preventDefault()
        console.log("username:", username.value)
        console.log("password:", password.value)

        dispatch(signInUser(username.value, password.value))
      }}>
        <div className="form-group">
          <label>Email</label>
          <input ref={node => username = node} type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input ref={node => password = node} type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

LoginForm = connect()(LoginForm)

export default LoginForm
