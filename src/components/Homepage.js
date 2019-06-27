import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../actions/actionCreators.js";
import {
  SideNav,
  BlackLink,
  StyledHeadSection,
  StyledH1,
  StyledHeader,
  StyledSubheading,
  StyledSearchBar,
  StyledLink,
  StyledQuestionCard,
  StyledFooter
} from "../styled-components/styled-components";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosMenu,
  IoIosHome,
  IoIosChatbubbles,
  IoIosBuild
} from "react-icons/io";

function Homepage(props) {
  const { questions, fetchQuestions } = props;
  const [state, toggleMenu] = useState({
    menuBool: false
  });
  const [search, toggleSearch] = useState({
    show: false
  });

  const [questionsData, setQuestions] = useState([]);

  useEffect(() => fetchQuestions(), [fetchQuestions]);
  useEffect(() => setQuestions(questions), [questions]);

  const SearchHandler = e => {
    e.preventDefault();
    const searchQ = e.target.value.toLowerCase();

    const result = questions.filter(question => {
      const searchValName = question.author.username.toLowerCase();
      const searchValTag = question.tag.tag.toLowerCase();

      return (
        searchValName.indexOf(searchQ) !== -1 ||
        searchValTag.indexOf(searchQ) !== -1
      );
    });
    setQuestions(result);
  };

  return (
    <div>
      {state.menuBool && (
        <SideNav>
          <BlackLink to="/home">
            <IoIosHome /> Home
          </BlackLink>

          <BlackLink to="/chats">
            <IoIosChatbubbles /> Chats
          </BlackLink>

          <BlackLink to="/changeProfile">
            <IoIosBuild /> Change Profile
          </BlackLink>
        </SideNav>
      )}
      <StyledHeadSection>
        <StyledHeader>
          <div
            onClick={() => {
              toggleMenu({ menuBool: !state.menuBool });
            }}
          >
            <IoIosMenu />
          </div>
          <StyledH1>Questions Feed</StyledH1>

          <IoIosSearch
            onClick={() => {
              toggleSearch({ show: !search.show });
            }}
          />
        </StyledHeader>
      </StyledHeadSection>

      {search.show && (
        <StyledSearchBar>
          <div>What would you like to help with?</div>
          <input
            type="search"
            placeholder="Search..."
            onChange={SearchHandler}
          />
        </StyledSearchBar>
      )}

      {questionsData.map(question => {
        return (
          <StyledLink key={question.id} to={`/question/${question.id}`}>
            <StyledQuestionCard
              key={question.id}
              image={question.author.avatar}
            >
              <h1>{question.author.username}</h1>
              <h3>{question.tag.tag}</h3>
              <p>{question.title}</p>
            </StyledQuestionCard>
          </StyledLink>
        );
      })}
      <StyledFooter>
        <BlackLink to="/home">
          <IoIosHome />
        </BlackLink>
        <BlackLink to="/chats">
          <IoIosChatbubbles />
        </BlackLink>
        <BlackLink to="/changeProfile">
          <IoIosBuild />
        </BlackLink>
      </StyledFooter>
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
