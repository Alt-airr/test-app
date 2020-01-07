import React from 'react';
import s from './Navbar.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Navbar = () => {

  const clearStorage = () => {
    localStorage.clear();
    console.log('localStorage is cleared' );
    window.location.href = "/login"
    return <Redirect to={"/login"}/>
  };

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/main" activeClassName={s.activeLink}>Main</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/contacts" activeClassName={s.activeLink}>Contacts</NavLink>
      </div>
      <div className={` ${s.active}`}>
        <button onClick={clearStorage}>
          <img src={require('../../../assets/images/userIcon.png')} alt=""/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;