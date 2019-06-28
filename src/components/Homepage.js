import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchQuestions,
  fetchTags,
  submitQuestion
} from "../actions/actionCreators.js";
import {
  SideNav,
  BlackLink,
  StyledHeadSection,
  StyledH1,
  StyledHeader,
  StyledSearchBar,
  StyledLink,
  StyledQuestionCard,
  AddQuestionBox,
  StyledFooter,
  PlusIcon,
  MinusIcon,
  StyledInput
} from "../styled-components/styled-components";
import {
  IoIosSearch,
  IoIosMenu,
  IoIosHome,
  IoIosChatbubbles,
  IoIosBuild
} from "react-icons/io";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";

function Homepage(props) {
  const { questions, fetchQuestions } = props;
  const [state, toggleMenu] = useState({
    menuBool: false
  });
  const [search, toggleSearch] = useState({
    show: false
  });

  const [QuestionBox, setQuestionBox] = useState(false);
  const [QuestionTag, setQuestionTag] = useState("");
  const [QuestionTitle, setQuestionTitle] = useState("");
  const [QuestionDescription, setQuestionDescription] = useState("");

  const [questionsData, setQuestions] = useState([]);

  useEffect(() => {
    props.fetchTags();
  }, []);

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

  function submit(e) {
    e.preventDefault();
    const tagId = props.tags.find(t => t.tag === QuestionTag).id;
    props.submitQuestion(
      QuestionTitle,
      QuestionDescription,
      props.userId,
      tagId
    );

    setQuestionBox(false);
    setQuestionTag("");
    setQuestionTitle("");
    setQuestionDescription("");

  }

  let options = [];
  props.tags.forEach(e => (options = options.concat(e.tag)));

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

          <BlackLink to="/edit-profile">
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
            <StyledQuestionCard image={question.author.avatar ? question.author.avatar : "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}>
              <h1>{question.author.username}</h1>
              <h3>{question.tag.tag}</h3>
              <p>{question.title}</p>
            </StyledQuestionCard>
          </StyledLink>
        );
      })}
      <AddQuestionBox>
        {!QuestionBox ? (
          <PlusIcon onClick={() => setQuestionBox(true)} />
        ) : (
          <div>
            <MinusIcon onClick={() => setQuestionBox(false)} />
            <StyledInput
              type="text"
              placeholder="Question title"
              onChange={e => {
                setQuestionTitle(e.target.value);
              }}
            />
            <StyledInput
              type="text"
              placeholder="Description"
              onChange={e => {
                setQuestionDescription(e.target.value);
              }}
            />
            <Dropdown
              className="input"
              placeholderClassName="blue"
              options={options}
              onChange={e => setQuestionTag(e.value)}
              value={QuestionTag}
              placeholder="Select tag..."
            />
            <StyledInput
              type="submit"
              value="Submit question"
              onClick={submit}
            />
          </div>
        )}
      </AddQuestionBox>
      <StyledFooter>
        <BlackLink to="/home">
          <IoIosHome />
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
  { fetchQuestions, fetchTags, submitQuestion }
)(Homepage);
