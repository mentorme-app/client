import React, { useEffect } from "react";
import { fetchConversations } from "../actions/actionCreators";
import { connect } from "react-redux";
import * as styles from "../styled-components/styled-components";

function Conversation(props) {

  

  useEffect(() => {
    props.fetchConversations(props.match.params.questionid, [props.match.params.questionId]);
  });

  return (
    <styles.MessageHeader>
        <div>
            <img src={props.conversations.find((conv)=> conv.mentorid===props.match.params.mentorid)} alt="chatPartner" />
        </div>
    </styles.MessageHeader>
  )
}

const mapStateToProps = state => ({
  conversations: state.conversationsReducer.conversations,
  userId: state.authReducer.userId
});

export default connect(
  mapStateToProps,
  {fetchConversations}
)(Conversation);
