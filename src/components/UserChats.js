import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserChats, fetchQuestions } from "../actions";
import { BlackLink, StyledChat,StyledFooter } from "../styled-components/styled-components";
import { IoIosHome, IoIosBuild, IoIosPerson, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const UserChats = props => {
  const { fetchQuestions, fetchUserChats, userId, chats } = props;

  useEffect(() => {
    fetchQuestions();
    fetchUserChats(userId);
  }, [fetchQuestions, fetchUserChats, userId]);

  return (
    <StyledChat>
      <div className="chatHeader">
        <BlackLink onClick={() => props.history.goBack()}>
          <IoIosArrowBack />
        </BlackLink>

        <h2>Chat History</h2>
      </div>

      {chats.map(chat => (
        <div key={chat.id} className="chat">
          <div>
            <img src={chat.img} alt="Author Thumbnail" />
          </div>
          <div>
            <h4>{chat.name}</h4>
            <p>{chat.topic}</p>
          </div>
        </div>
      ))}
      <StyledFooter>
        <BlackLink to="/home">
          <IoIosHome />
        </BlackLink>
        <BlackLink to="/edit-profile">
          <IoIosBuild />
        </BlackLink>
        <BlackLink to="/profile">
          <IoIosPerson />
        </BlackLink>
      </StyledFooter>
    </StyledChat>
  );
};

const mapStateToProps = state => ({
  questions: state.questionsReducer.questions,
  chats: state.chatsReducer.chats.map(chat => {
    const allQuestions = state.questionsReducer.questions;
    const qId = chat.question_id;
    let currentQ = allQuestions.find(question => qId === question.id);

    return {
      ...chat,
      id: chat.id,
      topic: currentQ.title,
      name: currentQ.author.username,
      img: currentQ.author.avatar
    };
  }),
  userId: state.authReducer.userId
});

export default connect(
  mapStateToProps,
  { fetchQuestions, fetchUserChats }
)(UserChats);
