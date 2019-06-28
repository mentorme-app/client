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
    getQuestion({
      question: props.questions.find(
        q => q.id === parseInt(props.match.params.id)
      ),
      isFetched: true
    });
  }, [props.questions, props.match.params.id]);

  useEffect(() => props.fetchConversations(state.question.id));

  return (
    <div>
      {state.isFetched ? (
        <div>
          <styles.StyledQuestionHeader>
            <h1>{state.question.author.username}</h1>
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
            <h1>{state.question.title}</h1>
            <p>{state.question.question}</p>
          </styles.QuestionBox>
          <styles.QuestionFooter>
            <styles.StyledLink
              onClick={() => {
                props.newConversation(props.userId, props.match.params.id);
              }}
              to={`/conversation/${state.question.id}/${
                state.question.author.id
              }`}
            >
              <IoIosPersonAdd />
              <span> RESPOND</span>
            </styles.StyledLink>
          </styles.QuestionFooter>
        </div>
      ) : (
        <div />
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
