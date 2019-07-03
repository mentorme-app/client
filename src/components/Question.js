import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as styles from "../styled-components/styled-components";
import { IoIosPersonAdd } from "react-icons/io";
import { newConversation, fetchConversations } from "../actions/actionCreators";

function Question(props) {
  const [state, getQuestion] = useState({
    question: {},
    isFetched: false
  });

  useEffect(() => {
    const singleQuestion = props.questions.find(q => `${q.id}` === `${props.match.params.id}`);
    getQuestion({
      ...state,
      question: singleQuestion,
      isFetched: true
    });
  }, []);

  if(state.isFetched) {
    props.fetchConversations(state.question.id);
  }

  return (
    <div>
      {state.isFetched && (
        <div>
          <styles.StyledQuestionHeader>
            <h2>{state.question.author.username}</h2>
            <div>
              <img
                src={
                  state.question.author.avatar !== null
                    ? state.question.author.avatar
                    : "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                }
                alt="author avatar"
              />
            </div>
          </styles.StyledQuestionHeader>
          <styles.QuestionBox>
            <h3>{state.question.title}</h3>
            <p>{state.question.question}</p>
          </styles.QuestionBox>

          {state.question.author.id !== props.userId ? (
            <styles.StyledLink
              onClick={() => {
                props.newConversation(props.userId, props.match.params.id);
              }}
              to={`/conversation/${state.question.id}/${
                state.question.author.id
              }`}
            >
              <styles.QuestionFooter>
                <IoIosPersonAdd />
                <div> RESPOND</div>
              </styles.QuestionFooter>
            </styles.StyledLink>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  questions: state.questionsReducer.questions,
  userId: state.authReducer.userId
});

export default connect(
  mapStateToProps,
  { newConversation, fetchConversations }
)(Question);
