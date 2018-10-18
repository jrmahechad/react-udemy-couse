import React, { Component } from 'react';
import './UserInput.css'

class UserInput extends Component {
  render() {
    return <input  className="user-input" type="text" onChange={this.props.eventHandler} value={this.props.username}/>
  }
}

export default UserInput;