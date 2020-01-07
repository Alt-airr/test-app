import React from 'react';
import {connect} from 'react-redux';
import App from "./App";
import Preloader from "./components/common/preloader/Preloader";
import {getAccessKey, toggleIsFetching} from "./redux/auth-reducer";
import {getMockInfo} from "./redux/main-reducer";





let mapStateToProps = (state) => {
  return {
    showNavbar: state.auth.showNavbar,
  }
}



  const AppContainer = connect(mapStateToProps,
  {getAccessKey, getMockInfo, toggleIsFetching })(App);

  export default AppContainer