import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { loginUser, signup, userProfile } from "../actions";

const UserProfile = props => {

  const { userProfile } = props;

  useEffect(() => userProfile(props.userId), [userProfile, props.userId]);

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
          <div>{props.user.username}</div>
          <div>{props.user.tag}</div>
        </div>
        <div> <Link to='/edit-profile'><button>Edit Profile <FontAwesomeIcon icon={faEdit} /></button></Link></div>
        <div>
          {/* <div>{props.user.questionsAsked}</div>
          <div>{props.user.questionsAnswered}</div> */}
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
  user: state.userReducer.user,
  userId: state.authReducer.userId
});

export default connect(
  mapStateToProps,
  { signup, loginUser, userProfile }
)(UserProfile);
