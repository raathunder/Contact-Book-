import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  ADD_FAVOURITE,
  USER_LOGIN,
  USER_LOGOUT,
} from "../contactConst/types";

//action is done here
export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

//getting a contact

export const getContact = (id) => {
  return {
    type: GET_CONTACT,
    payload: id,
  };
};

//updating the contacts

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

//deleting contact

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

//add favirutes

export const addFavourite = (contact) => ({
  type: ADD_FAVOURITE,
  payload: contact,
});

//user LOGin
export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: user,
});
//user Logout

export const userLogout = (user) => ({
  type: USER_LOGOUT,
  payload: user,
});

//new onere
export const selectUser = (state) => state.user.user;
