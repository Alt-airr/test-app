import React from 'react';
import {connect} from 'react-redux';
import {
  toggleIsFetching
} from '../../../../redux/contacts-reducer';
import Main from "./Main";

let mapStateToProps = (state) => {
  return {
    mockInfo: state.mainPage.mockInfo,
    isFetching: state.mainPage.isFetching,
    isAuth: state.auth.isAuth
  }
}

const MainContainer = connect(mapStateToProps,
  { toggleIsFetching})(Main);

export default MainContainer