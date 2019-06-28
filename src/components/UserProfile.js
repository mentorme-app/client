import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import {
  ProfileWrapper,
  StyledLoader,
  StyledProfile,
  StyledFooter,
  BlackLink
} from "../styled-components/styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { IoIosHome, IoIosChatbubbles, IoIosBuild } from "react-icons/io";
import { loginUser, signup, userProfile } from "../actions";

const UserProfile = props => {
  const { userProfile } = props;

  useEffect(() => userProfile(props.userId), [userProfile, props.userId]);

  if (props.loading) {
    return (
      <StyledLoader>
        <Loader type="ThreeDots" color="#5887f9" height={80} width={80} />
      </StyledLoader>
    );
  }

  if (props.error) {
    return <div>{props.error}</div>;
  }

  return (
    <div>
      <ProfileWrapper>
        <StyledProfile image={props.user.avatar}>
          <h3>{props.user.username}</h3>
          <div>{props.user.tag}</div>
        </StyledProfile>
        <div>
          <button>
            <Link to="/edit-profile">
              EDIT PROFILE <FontAwesomeIcon icon={faEdit} />
            </Link>
          </button>
        </div>

        <div className="info">
          <h3>{props.user.motto}</h3>
          <div>{props.user.description}</div>
        </div>
      </ProfileWrapper>
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
