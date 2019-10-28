import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './body.css';

export default class extends Component {
  render() {
    return (
      <div className='main-content'>
        {this.props.children}
      </div>
    )
  }
}