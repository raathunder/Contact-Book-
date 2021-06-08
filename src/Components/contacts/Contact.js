import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { addFavourite, deleteContact } from "../../actions/actionContact";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
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
      <td>
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <Link>
          <span
            className="material-icons text-danger me-2"
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </span>
        </Link>
        <Link>
          <span
            className="material-icons me-2 text-info heartOne"
            onClick={() => dispatch(addFavourite(contact))}
          >
            favorite
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Contact;
