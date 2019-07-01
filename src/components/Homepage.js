import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchQuestions
} from "../actions";
import QuestionForm from "./QuestionForm";
import {
  BlackLink,
  StyledHeadSection,
  Wrapper,
  StyledHeader,
  StyledSearchBar,
  StyledLink,
  StyledQuestionCard,
  AddQuestionBox,
  PlusIcon,
  MinusIcon,
  StyledFooter
} from "../styled-components/styled-components";
import {
  IoIosSearch,
  IoIosPerson,
  IoIosChatbubbles,
  IoIosBuild
} from "react-icons/io";

function Homepage(props) {

  const { questions, fetchQuestions } = props;

  const [show, toggleShow] = useState(false)

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
      <StyledHeadSection>
        <StyledHeader>
        <div><h1>MentorMe</h1></div>
        <button onClick={() => toggleShow(!show)}>Post new question {!show ? <PlusIcon /> : <MinusIcon /> }</button>
          <IoIosSearch
            onClick={() => {
              toggleSearch({ show: !search.show });
            }}
          />
          <button>Logout</button>
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

      <AddQuestionBox>
        <QuestionForm toggle={show}/>
      </AddQuestionBox>

      <Wrapper>
        {questionsData.map(question => {
          return (
            <StyledLink key={question.id} to={`/question/${question.id}`}>
              <StyledQuestionCard
                image={
                  question.author.avatar
                    ? question.author.avatar
                    : "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                }
              >
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
  questions: state.questionsReducer.questions,
  tags: state.tagsReducer.tags,
  userId: state.authReducer.userId
});

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(Homepage);
