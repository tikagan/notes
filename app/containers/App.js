import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevTools from './DevTools';
// import '../styles/appStyles.scss'

export default class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {

              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
