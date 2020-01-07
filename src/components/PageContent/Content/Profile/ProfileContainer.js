import React from 'react';
import {connect} from 'react-redux';
import {
  setUsers,
  toggleIsFetching,
} from '../../../../redux/contacts-reducer';
import Profile from "./Profile";


let mapStateToProps = (state) => {
  return {
    accessKey: state.auth.accessKey,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    userInfo: state.auth.userInfo
  }
}

export default connect(mapStateToProps,
  {setUsers, toggleIsFetching})(Profile);