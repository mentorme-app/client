import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../actions";

import {
  SideNav,
  BlackLink,
  StyledHeadSection,
  Wrapper,
  StyledHeader,
  StyledSearchBar,
  StyledLink,
  StyledQuestionCard,
  StyledFooter
} from "../styled-components/styled-components";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosMenu,
  IoIosPerson,
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

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.history.push("/login");
    }
  });

  useEffect(fetchQuestions, []);
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
          <BlackLink to="/profile">
            <IoIosPerson /> Profile
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
          <h1>Questions Feed</h1>

          <IoIosSearch
            onClick={() => {
              toggleSearch({ show: !search.show });
            }}
          />
        </StyledHeader>
        <h1 className='subheading'>
          Topic <IoIosArrowDown />
        </h1>
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
      <Wrapper>
        {questionsData.map(question => {
          return (
            <StyledLink key={question.id} to={`/question/${question.id}`}>
              <StyledQuestionCard image={question.author.avatar}>
                <h1>{question.author.username}</h1>
                <h3>{question.tag.tag}</h3>
                <p>{question.title}</p>
              </StyledQuestionCard>
            </StyledLink>
          );
        })}
      </Wrapper>
      <StyledFooter>
        <BlackLink to="/profile">
          <IoIosPerson />
        </BlackLink>
        <BlackLink to="/chats">
          <IoIosChatbubbles />
        </BlackLink>
        <BlackLink to="/edit-profile">
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
