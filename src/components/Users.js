import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  displayUsers = () => {
    return this.props.users.map(user => (
      <li key={user.username}>
        {user.username} from {user.hometown}
      </li>
    ));
  };
  
  numOfUsers=(len)=>{
    debugger;
    switch (len) {
      case len === 0:
        return <p>"no users yet"</p>;
      case len === 1:
        return <p>"this is our current user"</p>;
      case len > 1:
        return (
          <p>"There are currently " + {this.props.users.length} + ' Users!'</p>
        );
        default:
          return null    }
  };

  render() {
    console.log(this.props.users);
    return (
      <div>
        <ul>
          {this.numOfUsers(this.props.users.length)}
          {this.displayUsers()}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { users: state.users };
};
//add mapStateToProps here

export default connect(mapStateToProps)(Users);
