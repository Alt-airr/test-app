import React from 'react';
import {Redirect} from "react-router-dom";
import s from "./Profile.module.css";
import userPhoto from "../../../../assets/images/user.png";

const Profile = (props) => {


  if (localStorage.getItem('userKey') !== null && props.userInfo != null) {
    return (
      <div className={s.profile}>
          <img src={props.userInfo.picture.large != null ? props.userInfo.picture.large : userPhoto}
               className={s.ava}/>
            <div className={s.row}>{props.userInfo.name.first + ' ' + props.userInfo.name.last}</div>
            <div className={s.descriptionItem}>
              <div className={s.row}>City : {props.userInfo.location.city}</div>
            </div>
            <div className={s.descriptionItem}>
              <div className={s.row}>Email : {props.userInfo.email}</div>
            </div>
      </div>
    )
  } else {
    return <Redirect to={"/login"} />
  }
}


export default Profile;