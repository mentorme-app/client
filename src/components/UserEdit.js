import React, { useState } from "react";
import { connect } from "react-redux";
import {FormModal} from '../styled-components/styled-components'
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
    <FormModal>
      <div>
      <h1>Edit Credentials</h1>
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
          <input type="submit" value='SUBMIT CHANGES' />
        </form>
      </div>
    </FormModal>
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
