import React from 'react';
import '../../App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ContactsContainer from "./Content/Contacts/ContactsContainer";
import MainContainer from "./Content/Main/MainContainer";
import ProfileContainer from "./Content/Profile/ProfileContainer";
import Navbar from "./Navbar/Navbar";
import LoginFormContainer from "../loginForm/LoginFormContainer";
import Redirect from "react-router-dom/es/Redirect";

const Components = (props) => {

  return (
    <div className='app-wrapper-content'>
      <Navbar />
      <div className='content'>
        <Route path='/main'
               render={ () => <MainContainer  /> }/>

        <Route path='/profile'
               render={ () => <ProfileContainer  /> }/>

        <Route path='/contacts'
               render={ () => <ContactsContainer /> }/>
        <Route path='/login'
               render={ () => <LoginFormContainer /> }/>
      </div>
    </div>
  )
}

export default Components;
