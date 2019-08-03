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
      <form className={styles.form}>
        { this.props.questionList.map((questionID, key) => {
          const thisQuestion = this.findQuestion(questionID);

          return <fieldset className={styles.fieldset}
            key={questionID}>
              <legend className={styles.legend}>{thisQuestion.question}</legend>

              { thisQuestion.answers.map((answer, key) => {
                return <div className={styles.group}>
                  <input type="radio" id={questionID + "-" + key} name={questionID}/>
                  <label className={styles.label} for={questionID + "-" + key}>{answer}</label>
                </div>
              })}
            </fieldset>
        })}
        <Link to="/" className="button orange">
          Back
        </Link>
        <button type="submit" className="button green">Save</button>
      </form>
    );
  }
}

export default Form;
