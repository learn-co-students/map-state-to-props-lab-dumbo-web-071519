import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map(user => {
      return <li>{user.username}</li>
    });

    return (
      <div>
          {/* In addition, display the total number of users curently in the store */
          this.props.numberOfUsers
          }
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */
          users
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}


export default connect(mapStateToProps)(Users);
