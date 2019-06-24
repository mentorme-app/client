import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { userProfile } from "../actions";

const UserProfile = props => {
  const { userProfile } = props;
  useEffect(() => userProfile(), [userProfile]);

  if (props.loading) {
    return <Loader type="ThreeDots" color="#ccc" height={80} width={80} />;
  }

  if (props.error) {
    return <div>{props.error}</div>;
  }

  return (
    <div>
      <div>
        <div>
          <img src={props.user.avatar} alt="User avatar" />
          <div>{props.user.businessType}</div>
        </div>
        <div>
          <div>{props.user.questionsAsked}</div>
          <div>{props.user.questionsAnswered}</div>
        </div>
        <div>
          <h3>{props.user.motto}</h3>
          <div>{props.user.description}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.userReducer.loading,
  error: state.userReducer.error,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { userProfile }
)(UserProfile);
