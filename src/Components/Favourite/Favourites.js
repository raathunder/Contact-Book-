import React from "react";
import Avatar from "react-avatar";

import { useDispatch } from "react-redux";

const Favourite = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;

  return (
    <tr>
      <td>
        <Avatar className="me-4" name={name} size="40" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
};

export default Favourite;
