import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/actionContact";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const createHandle = (e) => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(addContact(newContact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createHandle(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="enter your name"
              required="required"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="enter your phone"
              value={phone}
              required="required"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="enter your email"
              value={email}
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button class="btn btn-primary me-md-2" type="submit" btn-lg>
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
