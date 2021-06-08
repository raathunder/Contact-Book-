import React from "react";
import { useSelector } from "react-redux";
import Favourite from "./Favourites";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacted.favourites);
  console.log(contacts);
  return (
    <div>
      <h1>Favourite List</h1>
      <table className="table shadow table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length != 0 ? (
            contacts.map((contact) => (
              <Favourite contact={contact} key={contact.id} />
            ))
          ) : (
            <p className="text-center fw-bold text-primary ">
              You have no any Favourite Contact List
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
