import React from "react";

import Header from "../components/header/header";
import Quizzes from "../components/quizzes/quizzes";

class Base extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <main>
          <Quizzes />
        </main>
      </section>
    );
  }
}

export default Base;
