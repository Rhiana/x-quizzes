import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "../components/header/header";
import Quizzes from "../components/quizzes/quizzes";
import Questions from "../components/questions/questions";

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }
  }

  onQuizSubmit = (savedAnswers) => {
    console.log(savedAnswers)
    const currentAnswers = this.state.answers;

    this.setState({answers: [...currentAnswers, savedAnswers]})
  }

  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        component: () => <Quizzes
          answers={this.state.answers}
        />
      },
      {
        path: "/quizzes/:id",
        component: (props) => <Questions
          onQuizSubmit={this.onQuizSubmit}
          match={props.match}
        />
      }
    ];

    return (
      <section>
        <Router>
          <Header />
          <main>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              ></Route>
            ))}
          </main>
        </Router>
      </section>
    );
  }
}

export default Base;
