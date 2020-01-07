import React from 'react';
import styles from "./Contacts.module.css";
import userPhoto from "../../../../assets/images/user.png";
import {Redirect} from "react-router-dom";
import Preloader from "../../../common/preloader/Preloader";


class Contacts extends React.Component {

  render() {
    if (localStorage.getItem('userKey') != null && this.props.users != null) {
      if (this.props.isFetching) {
        return <Preloader/>
      } else {
        return (
          <div className={styles.items}>
            {this.props.users.map(u => <div className={styles.userItem} key={u.id}>
                   <span>
                     <div>
                         <img src={u.picture.large != null ? u.picture.large : userPhoto}
                              className={styles.userPhoto}/>
                        </div>
                    </span>
                   <span>
                    <span>
                        <div>{u.name.first + ' ' + u.name.last}</div>
                    </span>
                    <span>
                        <div>City : {u.location.city}</div>
                        <div>{u.email}</div>
                    </span>
                    </span>
            </div>)}
          </div>)
      }
    } else {
      return <Redirect to={"/login"}/>;
    }
  }
}

export default Contacts;