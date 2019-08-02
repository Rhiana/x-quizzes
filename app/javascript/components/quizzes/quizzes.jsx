import React from "react";
import Card from "../../components/card/card";

import quizzes from './data'
import styles from './quizzes.module.scss'

class Quizzes extends React.Component {
  render() {
    const quizzesData = quizzes.quizzes;

    return (
      <section className={styles.page}>
        <article className={styles.content}>
          <header className={styles.header}>
            <h1>All Quizzes</h1>
          </header>

          { quizzesData.map((quiz, key) =>
              <Card
                quizzTitle={quiz.title}
                key={quiz.id}
                questionCount={quiz.question_ids.length}/>
          )}
        </article>
      </section>
    );
  }
}

export default Quizzes;
