import React from 'react'
import { connect } from 'react-redux'
import { signInUser } from './requests/index'
import LoginForm from './components/LoginForm'
import MainView from './components/MainView'

const AppContainer = ({loggedIn, onSubmit}) => (
  <div className="App container">
    { loggedIn ?
        <MainView /> :
        <LoginForm onSubmit={onSubmit} /> }
  </div>
)

const mapStateToProps = (state) => ({
  loggedIn: state.user.token !== null
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, pass) => dispatch(signInUser(email, pass))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);


