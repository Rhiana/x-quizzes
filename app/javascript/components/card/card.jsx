import React from "react";
import { Link } from "react-router-dom";

import card from './card.module.scss'

class Card extends React.Component {
  render() {
    const quizzesLink = this.props.quizzLink;

    return (
      <div className={card.content}>
        <h2 className={card.title}>
          {this.props.quizzTitle}
        </h2>
        <p className={card.number}>
          <strong>Number of questions:</strong> {this.props.questionCount}
        </p>
        <Link to={"/quizzes/" + quizzesLink} className="button green">
          Start
        </Link>
      </div>
    );
  }
}

export default Card;
