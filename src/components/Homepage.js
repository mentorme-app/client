import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as styles from "../styled-components/styled-components";
import { fetchQuestions } from "../actions/actionCreators.js";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosMenu,
  IoIosHome,
  IoIosChatbubbles,
  IoIosBuild
} from "react-icons/io";

function Homepage(props) {
  const [state, toggleMenu] = useState({
    menuBool: false
  });
  const { fetchQuestions } = props;

  useEffect(() => fetchQuestions(), [fetchQuestions]);

  return (
    <div>
      {state.menuBool && (
        <styles.SideNav>
          <styles.BlackLink to="/home">
            <IoIosHome /> Home
          </styles.BlackLink>
          <styles.BlackLink to="/chats">
            <IoIosChatbubbles /> Chats
          </styles.BlackLink>
          <styles.BlackLink to="/changeProfile">
            <IoIosBuild /> Change Profile
          </styles.BlackLink>
        </styles.SideNav>
      )}
      <styles.StyledHeadSection>
        <styles.StyledHeader>
          <div
            onClick={() => {
              toggleMenu({ menuBool: !state.menuBool });
            }}
          >
            <IoIosMenu />
          </div>
          <styles.StyledH1>Questions Feed</styles.StyledH1>
          <styles.BlackLink to="/search">
            <IoIosSearch />
          </styles.BlackLink>
        </styles.StyledHeader>
        <styles.StyledSubheading>
          Topic <IoIosArrowDown />
        </styles.StyledSubheading>
      </styles.StyledHeadSection>
      {props.questions.map(question => {
        return (
          <styles.StyledLink key={question.id} to={`/question/${question.id}`}>
            <styles.StyledQuestionCard key={question.id} image={question.author.avatar}>
              <h1>{question.author.username}</h1>
              <h2>{question.tag.tag}</h2>
              <p>{question.question}</p>
            </styles.StyledQuestionCard>
          </styles.StyledLink>
        );
      })}
      <styles.StyledFooter>
        <styles.BlackLink to="/home">
          <IoIosHome />
        </styles.BlackLink>
        <styles.BlackLink to="/chats">
          <IoIosChatbubbles />
        </styles.BlackLink>
        <styles.BlackLink to="/changeProfile">
          <IoIosBuild />
        </styles.BlackLink>
      </styles.StyledFooter>
    </div>
  );
}

const mapStateToProps = state => ({
  questions: state.questionsReducer.questions
});

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(Homepage);
