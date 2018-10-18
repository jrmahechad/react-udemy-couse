import React, { Component } from 'react';

const style = {
  border: '1px solid red'
}

class UserOutput extends Component {
  render() {
    return (
      <div style= {style}>
        <p>paragraph 1 {this.props.username}</p>
        <p>paragraph 2</p>
      </div>
    );
  }
}

export default UserOutput;