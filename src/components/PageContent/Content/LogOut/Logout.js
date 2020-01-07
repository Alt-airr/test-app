import React from 'react';
import userIcon from '../../../../assets/images/userIcon.png'

class Main extends React.Component{

  logoutHandler(){
    localStorage.clear();
     return <Redirect to={"/login"}/>
     cpnsole.log('cleaaaaa ')
  }
  render() {
    return (
      <div >
        <button onClick={this.logoutHandler}>
          {userIcon}
        </button>
      </div>
    )
  }


}

export default Main;