import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './../form/form';

import quizzes from './../quizzes/data';
import styles from './questions.module.scss';

class Questions extends React.Component {
  findQuiz = (quizID) => {
    const quizzesData = quizzes.quizzes;
    var quiz;

    for (quiz of quizzesData) {
      if (quiz.id == quizID) {
        return quiz
      }
    }
  }

  render() {
    const quizId       = this.props.match.params.id;
    const thisQuiz     = this.findQuiz(quizId);
    const questionList = thisQuiz.question_ids;

    return (
      <section className={styles.page}>
        <article className={styles.content}>
          <header className={styles.header}>
            <h1>{thisQuiz.title}</h1>
          </header>

          <Form
            questionList={questionList}>
          </Form>
        </article>
      </section>
    );
  }
}

export default Questions;
