import React, { Component } from 'react';
import { Link } from 'react-router';

class NoteList extends Component {
  // static propTypes = {
  //   increment: PropTypes.func.isRequired,
  //   incrementIfOdd: PropTypes.func.isRequired,
  //   incrementAsync: PropTypes.func.isRequired,
  //   decrement: PropTypes.func.isRequired,
  //   counter: PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default NoteList;
