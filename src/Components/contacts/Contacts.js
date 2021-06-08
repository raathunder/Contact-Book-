import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
// import { withRouter } from "react-router-dom";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacted.contacts);
  return (
    <div>
      <table className="table shadow table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
