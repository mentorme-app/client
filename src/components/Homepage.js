import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as styles from "../styled-components/styled-components";
import { fetchQuestions } from "../actions/actionCreators.js";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosMenu,
  IoIosHome,
  IoIosPeople,
  IoIosChatbubbles,
  IoIosBuild
} from "react-icons/io";

function Homepage(props) {
  function test() {
    console.log(fetchQuestions);
  }

  useEffect(() => fetchQuestions());

  return (
    <div>
      <styles.StyledHeadSection>
        <styles.StyledHeader>
          <IoIosMenu />
          <styles.StyledH1>Questions Feed</styles.StyledH1>
          <IoIosSearch />
        </styles.StyledHeader>
        <styles.StyledSubheading>
          Topic <IoIosArrowDown />
        </styles.StyledSubheading>
      </styles.StyledHeadSection>
      {props.questions.map(question => {
        return (
          <Link to={`/question/${question.id}`}>
            <styles.StyledQuestionCard image={question.author.avatar}>
              <h1>{question.author.username}</h1>
              <h2>{question.tag.tag}</h2>
              <p>{question.question}</p>
            </styles.StyledQuestionCard>
          </Link>
        );
      })}
      <styles.StyledFooter>
        <IoIosHome />
        <IoIosPeople />
        <IoIosChatbubbles />
        <IoIosBuild />
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
