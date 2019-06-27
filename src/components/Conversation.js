import React, { useEffect, useState } from "react";
import { fetchConversations } from "../actions/actionCreators";
import { connect } from "react-redux";
import * as styles from "../styled-components/styled-components";
import axios from "axios";

function Conversation(props) {
  const [rightConv, setRightConv] = useState({});

  const [isFetched , setIsFetched] = useState(false);

  const [rightAvatar, setAvatar] = useState("");

  //PRODUCES INFINITE LOOP ?!
  /* useEffect(() => {
    props.fetchConversations(props.match.params.questionid);
    const rightConversation = props.conversations.find(
      conv => conv.mentor_id === props.userId || conv.author_id === props.userId
    );
    let rightAvatar
    setState(() => {
      if (rightConversation) {
        axios
          .get(
            `https://mentor-me-backend.herokuapp.com/api/user/${
              rightConversation.mentor_id === props.userId
                ? rightConversation.author_id
                : rightConversation.mentor_id
            }`
          )
          .then(res => {
           debugger; 
            rightAvatar = res.data.avatar;
          })
          .catch(err => {
            debugger;
          });
      }

      console.log(rightAvatar);

      if (rightConversation) {
        return {
          rightConv: rightConversation,
          isFetched: true,
          rightAvatar: rightAvatar
        };
      } else {
        return { ...state };
      }
    });
    console.log(state.rightConv);
  }, [props, state, state.rightConv]); */

  return (
    <styles.MessageHeader>
      <div>
        <img alt={""/* state.rightConv.mentor_id === props.userId ? "" : "" */} />
      </div>
    </styles.MessageHeader>
  );
}

const mapStateToProps = state => ({
  questions: state.questionsReducer.questions,
  conversations: state.conversationsReducer.conversations,
  userId: state.authReducer.userId
});

export default connect(
  mapStateToProps,
  { fetchConversations }
)(Conversation);
