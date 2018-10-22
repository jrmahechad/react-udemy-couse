import React, { Component } from 'react';
import './CharComponent.css';

export default class CharComponent extends Component {
  render() {
    return (
      <div className="char-component" onClick={this.props.deleteHandler}>
        <p>{this.props.char}</p>
      </div>
    );
  }
}
