import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchConvById,
  postMessage,
  fetchConversations,
  newConversation
} from "../actions/actionCreators";
import * as styles from "../styled-components/styled-components";

function Conversation(props) {
  useEffect(() => {
    props.newConversation(props.userId, props.match.params.id);
  }, []);

  useEffect(() => {
    if (props.conversations) {
      const conv = props.conversations.find(
        conv =>
          conv.mentor_id === props.userId || conv.author_id === props.userId
      );
      if (conv !== undefined) {
        props.fetchConvById(conv.id);
      }
    }
  }, []);

  const [newMessage, setNewMessage] = useState("");

  function submit(e) {
    e.preventDefault();
    props.postMessage(props.userId, newMessage, props.conv.id);
    setNewMessage("");
  }

  if (!props.convWasFetched) {
    return <div>Loading</div>;
  }

  if (props.convWasFetched && props.conv !== undefined) {
    return (
      <styles.ConversationPage>
        <styles.MessageHeader>
          <h1>
            {props.conv.mentor_id === props.userId
              ? props.conv.author.username
              : props.conv.mentor.username}
          </h1>
        </styles.MessageHeader>
        {props.conv.messages.map(m => {
          if (m.sender === props.userId) {
            return (
              <styles.MessageRight>
                <p>{m.text}</p>
              </styles.MessageRight>
            );
          } else {
            return (
              <styles.MessageLeft>
                <p>{m.text}</p>
              </styles.MessageLeft>
            );
          }
        })}
        <footer>
          <form onSubmit={submit}>
            <styles.StyledInput
              type="text"
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Your message..."
            />
            <div onClick={submit}>
              <styles.ArrowForward />
            </div>
          </form>
        </footer>
      </styles.ConversationPage>
    );
  }

  // return (
  //   <styles.ConversationPage>
  //     <styles.MessageHeader>
  //       <h1>
  //         {`${props.conv.mentor_id}` === `${props.userId}`
  //           ? `${props.conv.author.username}`
  //           : `${props.conv.mentor.username}`}
  //       </h1>
  //     </styles.MessageHeader>
  //     <footer>
  //     <form onSubmit={submit}>
  //       <styles.StyledInput
  //         type="text"
  //         value={newMessage}
  //         onChange={e => setNewMessage(e.target.value)}
  //         placeholder="Your message..."
  //       />
  //       <div onClick={submit}>
  //         <styles.ArrowForward />
  //       </div>
  //     </form>
  //     </footer>
  //   </styles.ConversationPage>

  // )
}

function mapStateToProps(state) {
  return {
    conversations: state.conversationsReducer.conversations,
    wasFetched: state.conversationsReducer.wasFetched,
    conv: state.conversationsReducer.conv,
    convWasFetched: state.conversationsReducer.convWasFetched,
    userId: state.authReducer.userId
  };
}

export default connect(
  mapStateToProps,
  { fetchConvById, postMessage, fetchConversations, newConversation }
)(Conversation);
