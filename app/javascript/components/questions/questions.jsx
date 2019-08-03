import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import quizzes from './../quizzes/data';
import questions from './data';
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

  findQuestion = (questionID) => {
    const questionData = questions.questions;
    var question;

    for (question of questionData) {
      if (question.id == questionID) {
        return question
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

          { questionList.map((questionID, key) => {
            const thisQuestion = this.findQuestion(questionID);

            return <div
              key={questionID}>
                <h2>{thisQuestion.question}</h2>
                {thisQuestion.answers}
              </div>
          })}
        </article>
      </section>
    );
  }
}

export default Questions;
