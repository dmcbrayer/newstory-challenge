import React from 'react'
import { connect } from 'react-redux'
import { getRecipients } from '../requests'

class MainView extends React.Component {
  componentWillMount() {
    this.props.getRecipients(this.props.user.token)
  }

  render() {
    return(
      <div>
        <h3>You are logged in {this.props.user.firstName}</h3>

        <table className="table">
          <thead>
            <th>Name</th>
            <th>Submission Count</th>
          </thead>
          <tbody>
          {
            this.props.recipients.map(r => (
              <tr>
                <td>{r.name}</td>
                <td>{r.submissionUuids.length}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let recipients = Object.keys(state.entities.recipients).map(k => state.entities.recipients[k])

  return {
    user: state.user,
    recipients: recipients
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRecipients: (authToken) => dispatch(getRecipients(authToken))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
