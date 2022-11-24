import React from "react";
import StyledForm from "../styles";

function Login({}) {
  return (
    <StyledForm>
      <form>
        <h3>Login</h3>
        <input type="text" placeholder="id" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
      </form>
    </StyledForm>
  );
}

export default Login;
