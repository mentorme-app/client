import React, { useState } from "react";
import { connect } from "react-redux";
import { userProfile } from "../actions";
import { editCred } from "../actions";

const UserEdit = props => {
  const [user, editUser] = useState({
    email: "",
    password: ""
  });
  const edit = e => {
    e.preventDefault();
    props.editCred(props.userId, { ...user });
  };

  return (
    <div>
      <form onSubmit={edit}>
        <input
          type="email"
          placeholder="Enter new email"
          value={user.email}
          onChange={e => editUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter new password"
          value={user.password}
          onChange={e => editUser({ ...user, password: e.target.value })}
        />
        <button type="submit">SUBMIT CHANGES</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  userId: state.authReducer.userId
});

export default connect(
  mapStateToProps,
  { userProfile, editCred }
)(UserEdit);
