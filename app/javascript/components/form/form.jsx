import React from "react";
import { Link } from "react-router-dom";

import questions from './../questions/data';
import styles from './form.module.scss';

class Form extends React.Component {

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
    return (
      <form>
          { this.props.questionList.map((questionID, key) => {
            const thisQuestion = this.findQuestion(questionID);

            return <fieldset
              key={questionID}>
                <legend>{thisQuestion.question}</legend>
                {thisQuestion.answers}
              </fieldset>
          })}
        <Link to="/" className="button orange">
          Back
        </Link>
      </form>
    );
  }
}

export default Form;
