import React from "react";
import "./Logout.css";
import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../Features/userSlice";
// import { logout, selectUser } from "../Features/userSlice";
// import { logout } from ".";
import { userLogout, selectUser } from "../../actions/actionContact";
import { useHistory } from "react-router-dom";
// import Auth from "./Components/Authentication/auth";

const Logout = () => {
  let history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    history.push("/login");
  };
  return (
    <div className="logout">
      <h1>
        Welcome <span className="user_name">{user}</span>
      </h1>

      <button
        className="logout_button"
        btn-primary
        // onClick={(e) => {
        //   auth.logout(() => {
        //     props.history.push("/");
        //   }),
        //     handleLogout(e);
        // }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
