import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import s from "./Main.module.css";

const Main = (props) => {


  if (localStorage.getItem('userKey') != null && props.mockInfo !=null) {
    return (
      <div className={s.mainInfo} >
        <div className={s.row}>
          API:  <a href={props.mockInfo.Link}>{props.mockInfo.API? props.mockInfo.API : 'no information'}</a>
        </div>
        <div className={s.row}>
          Description: <span>{props.mockInfo.Description? props.mockInfo.Description : 'no information' } </span>
        </div>
        <div className={s.row}>
          Category: <span>{props.mockInfo.Category ? props.mockInfo.Category : 'no information' }</span>
        </div>
        <div className={s.row}>
          Auth: <span>{props.mockInfo.auth ? props.mockInfo.auth : 'no information' }</span>
        </div>
      </div>
    )
  } else {
    return <Redirect to={"/login"} />
  }
};


export default Main;