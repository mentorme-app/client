import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as styles from "../styled-components/styled-components";
import { IoIosPersonAdd } from "react-icons/io";

function Question(props) {
  const [state, getQuestion] = useState({
    question: {},
    isFetched: false
  });

  useEffect(() => {
    getQuestion({
      question: props.questions.find(
        q => q.id === JSON.parse(props.match.params.id)
      ),
      isFetched: true
    });
  }, [props.questions, props.match.params.id]);

  return (
    <div>
      {state.isFetched ? (
        <div>
          <styles.StyledQuestionHeader>
            <h2>{state.question.author.username}</h2>
            <div>
              <img
                src={
                  state.question.author.avatar !== null
                    ? state.question.author.avatar
                    : "../images/ask-blackboard-356079.jpg"
                }
                alt="author avatar"
              />
            </div>
          </styles.StyledQuestionHeader>
          <styles.QuestionBox>
            <h3>{state.question.title}</h3>
            <p>{state.question.question}</p>
          </styles.QuestionBox>
          <styles.StyledLink to={`/conversation/${state.question.id}`}>
            <styles.QuestionFooter>
              <IoIosPersonAdd />
              <div> RESPOND</div>
            </styles.QuestionFooter>
          </styles.StyledLink>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  questions: state.questionsReducer.questions
});

export default connect(
  mapStateToProps,
  {}
)(Question);
