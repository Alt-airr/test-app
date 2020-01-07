import React from 'react';
import {connect} from 'react-redux';
import {SyncValidationForm} from "./LoginForm";
import {getMockInfo} from "../../redux/main-reducer";
import {getAccessKey, rdCancel, toggleIsFetching} from "../../redux/auth-reducer";
import {getUsersData} from "../../redux/contacts-reducer";


let mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    needRedirect: state.auth.needRedirect,
  }
}

export default connect(mapStateToProps,
  { toggleIsFetching, getMockInfo, getAccessKey, rdCancel, getUsersData})(SyncValidationForm);