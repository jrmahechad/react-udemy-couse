import React, { Component } from 'react';

export default class ValidationComponent extends Component {
  render() {
    let message = '';
    if (this.props.length < 5) {
      message = 'Text too short';
    }
    if (this.props.length > 10) {
      message = 'Text long enough';
    }

    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
}
