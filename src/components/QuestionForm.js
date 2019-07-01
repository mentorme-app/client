import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTags, submitQuestion } from "../actions";
import { StyledQuestionForm } from "../styled-components/styled-components";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";

const QuestionForm = props => {
  const { fetchTags, toggle } = props;

  useEffect(fetchTags, []);

  const [newQuestion, setQuestion] = useState({
    toggle: false,
    tag: "",
    title: "",
    desc: ""
  });

  let options = [];
  props.tags.forEach(e => (options = options.concat(e.tag)));

  function submit(e) {
    e.preventDefault();
    const tagId = props.tags.find(t => t.tag === newQuestion.tag).id;
    props.submitQuestion(
      newQuestion.title,
      newQuestion.desc,
      props.userId,
      tagId
    );

    setQuestion({
      tag: "",
      title: "",
      desc: ""
    });
  }
  return (
    <div>
      {toggle && (
        <StyledQuestionForm onSubmit={submit}>
          <Dropdown
            className="input"
            options={options}
            onChange={e => setQuestion({ ...newQuestion, tag: e.value })}
            value={newQuestion.tag}
            placeholder="Select tag..."
          />
          <input
            type="text"
            placeholder="Question title"
            value={newQuestion.title}
            onChange={e =>
              setQuestion({ ...newQuestion, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={newQuestion.desc}
            onChange={e =>
              setQuestion({ ...newQuestion, desc: e.target.value })
            }
          />
          <input type="submit" value="Submit question"  />
        </StyledQuestionForm>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  tags: state.tagsReducer.tags,
  userId: state.authReducer.userId
});

export default connect(
  mapStateToProps,
  { fetchTags, submitQuestion }
)(QuestionForm);
