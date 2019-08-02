import React from "react";
import card from './card.module.scss'

class Card extends React.Component {
  render() {
    return (
      <div className={card.content}>
        <h2 className={card.title}>
          {this.props.quizzTitle}
        </h2>
        <p className={card.number}>
          <strong>Number of questions:</strong> {this.props.questionCount}
        </p>
        <a href="/" className="button green">Start</a>
      </div>
    );
  }
}

export default Card;
