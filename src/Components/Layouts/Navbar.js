import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout, selectUser } from "../../actions/actionContact";

const Navbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    history.push("/login");
  };
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand ">
            <span className="material-icons ">contact_page</span>
            Contact Book
          </Link>
          <Link to="/fav" className="btn btn-sucess col-4 ml-auto">
            Favourite List
          </Link>

          <Link
            to="/contacts/add"
            className="btn btn-sucess  col-4 ml-auto"
            type="button"
          >
            Create Contact
            <span className="material-icons  text-center">add</span>
          </Link>

          <Link
            onClick={(e) => handleLogout(e)}
            className="btn btn-sucess ml-auto "
            type="button"
          >
            Logout
            <span
              className="material-icons"
              //below changes made
            >
              logout
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
