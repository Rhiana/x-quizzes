import React from "react";
import card from './card.module.scss'

class Card extends React.Component {
  render() {
    return (
      <div className={card.content}>
        <h2 className={card.title}>
          Quiz 1
        </h2>
        <p>
          <strong>Number of questions:</strong>
           2
        </p>
        <a href="/" className="button green">Start</a>
      </div>
    );
  }
}

export default Card;
