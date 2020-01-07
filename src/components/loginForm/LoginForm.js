import React from 'react'
import styles from './LoginForm.css'
import {Redirect} from "react-router-dom";

export class SyncValidationForm extends React.Component {

  getData = () => {
    this.props.getAccessKey();
    this.props.getMockInfo();
    this.props.getUsersData();
  }

  render() {
    if (this.props.needRedirect) {
      this.props.rdCancel()
      return <Redirect to={"/main"}/>
    }
    return (
      <div className='form-group'>
        <div className="auth">

          <div className='row'> Login :
            <input type="text"/>
          </div>
          <div className='row'>
            Password :
            <input type="text"/>
          </div>


          <div className="btns">
            <button className='fb btn' onClick={this.getData}>Connect with Facebook</button>
            <button className='btn'>Log In</button>

          </div>
        </div>
      </div>
    )
  }
}


