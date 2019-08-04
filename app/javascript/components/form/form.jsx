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
                const qNumber = key + 1
                const inputID = "question-" + questionID + "-" + qNumber

                return <div className={styles.group}
                            key={key}>
                  <input type="radio"
                         id={inputID}
                         name={"question-" + questionID}
                         />
                  <label className={styles.label}
                         htmlFor={inputID}>
                         {answer}
                  </label>
                </div>
              })}
            </fieldset>
        })}
        <div className={styles.buttons}>
          <Link to="/" className="button orange">
            Back
          </Link>
          <button type="submit" className="button green">Save</button>
        </div>
      </form>
    );
  }
}

export default Form;
