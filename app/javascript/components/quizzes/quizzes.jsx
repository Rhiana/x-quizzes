import React from "react";
import Card from "../../components/card/card";

import quizzes from './data'
import styles from './quizzes.module.scss'

class Quizzes extends React.Component {
  render() {
    const quizzesData    = quizzes.quizzes;
    const currentAnswers = this.props.answers;
    const completedQuiz  = currentAnswers.length;

    return (
      <section className={styles.page}>
        <article className={styles.content}>
          <header className={styles.header}>
            <h1>All Quizzes</h1>
          </header>

          { quizzesData.map((quiz, key) =>
              <Card
                key={quiz.id}
                quizzTitle={quiz.title}
                quizzLink={quiz.id}
                questionCount={quiz.question_ids.length}
                currentAnswers={currentAnswers[key]}
                isCurrentQuiz={completedQuiz == key}/>
          )}
        </article>
      </section>
    );
  }
}

export default Quizzes;
