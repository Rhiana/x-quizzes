import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "../components/header/header";
import Quizzes from "../components/quizzes/quizzes";
import Questions from "../components/questions/questions";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Quizzes />
  },
  {
    path: "/quizzes/1",
    component: () => <Questions />
  }
];

class Base extends React.Component {
  render() {
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
