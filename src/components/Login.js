import React, { useState } from "react";
import App from "../App";
import Form from "./From";
import "./Login.css";
function Login() {
  const [login, setLogin] = useState(false);
  function handlelogin() {
    setLogin(true);
  }

  return (
    <div>
      {login ? (
        <App />
      ) : (
        <div className="exchange">
          <Form />
          <button onClick={handlelogin}>Submit</button>{" "}
        </div>
      )}
    </div>
  );
}

export default Login;
