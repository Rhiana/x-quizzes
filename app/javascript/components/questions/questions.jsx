import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import quizzes from './../quizzes/data';
import questions from './data';
import styles from './questions.module.scss';

class Questions extends React.Component {
  render() {
    let quizId = this.props.match.params.id;

    return (

      <h1>Quiz {quizId}</h1>
    );
  }
}

export default Questions;
