import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userLogin } from "../../actions/actionContact";
import { useHistory } from "react-router-dom";

//new one
import auth from "./auth";

const Login = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    history.push("/");
  };

  return (
    <div className="card border-0  shadow mystyle ">
      <div className="card-header">User Login</div>
      <span className="material-icons text-primary mt-2 firstl">input</span>

      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="enter your name"
              required="required"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="enter your email"
              value={email}
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="enter your password"
              value={password}
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button
              class="btn btn-primary me-md-2"
              type="submit"
              btn-lg
              //below chnges
              // onClick={() => {
              //   auth.login(() => {
              //     history.push("/contact");
              //   });
              // }}
              //
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
