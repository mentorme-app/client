import React from "react";
import {} from "";

function Login(props) {
  const refName = React.createRef();
  const refPassword = React.createRef();

  submitLogin = () => {

  }

  return (
    <div>
      <form onSubmit={submitLogin}>
        <input
          type="text"
          placeholder="Username"
          ref={refName}
          value={refName.current.value}
        />
        <input
          type="text"
          placeholder="Password"
          ref={refPassword}
          value={refPassword.current.value}
        />
        <input
          type="submit"
          onClick={submitLogin}
          value="Login"
        />
      </form>
    </div>
  );
}
