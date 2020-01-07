import React from 'react';
import {connect} from 'react-redux';

import PageContent from "./PageContent";
import {toggleIsFetching} from "../../redux/auth-reducer";


let mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  }
}

const PageContentContainer = connect(mapStateToProps,
  { toggleIsFetching})(PageContent);

export default  PageContentContainer