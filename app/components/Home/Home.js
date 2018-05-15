import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import NoteList from '../NoteList/NoteList'
import Note from '../Note/Note'


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <NoteList />
          <Note />
        </div>
      </div>
    );
  }
}
