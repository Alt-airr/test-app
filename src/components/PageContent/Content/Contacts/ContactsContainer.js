import React from 'react';
import {connect} from 'react-redux';
import {
  setUsers,
  toggleIsFetching, getUsersData
} from '../../../../redux/contacts-reducer';
import Contacts from './Contacts';


let mapStateToProps = (state) => {
  return {
    users: state.contactsPage.users,
    isFetching: state.contactsPage.isFetching,
    isAuth: state.auth.isAuth
  }
}

const ContactsContainer = connect(mapStateToProps,
  {getUsersData, setUsers,  toggleIsFetching})(Contacts);

export default ContactsContainer