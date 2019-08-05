import React from "react";
import { Link, withRouter } from "react-router-dom";

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

  constructor(props) {
    super(props);
    this.state = {
      selectedOption1: 1,
      selectedOption2: 1,
      selectedOption3: 1,
      selectedOption4: 1,
      selectedOption5: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    var savedAnswers = [
      this.state.selectedOption1,
      this.state.selectedOption2,
      this.state.selectedOption3,
      this.state.selectedOption4,
      this.state.selectedOption5
    ]
    this.props.onQuizSubmit(savedAnswers);
    this.props.history.push('/');
  };

  render() {

    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
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
                         name={"selectedOption" + questionID}
                         value={answer}
                         onChange={this.handleChange}
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

export default withRouter(Form);
