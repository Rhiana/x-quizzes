import React from "react";
import Card from "../../components/card/card";

import quizzes from './quizzes.module.scss'

class Quizzes extends React.Component {
  render() {
    return (
      <section className={quizzes.page}>
        <article className={quizzes.content}>
          <header className={quizzes.header}>
            <h1>All Quizzes</h1>
          </header>

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </section>
    );
  }
}

export default Quizzes;
