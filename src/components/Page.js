import React from 'react';
import PageContentContainer from "./PageContent/PageContentContainer";
import LoginFormContainer from "./loginForm/LoginFormContainer";

class Page extends React.Component {

  render() {
    const userKey = localStorage.getItem('userKey');
    console.log('uk in page ', userKey);
    return (
      <div className='app-wrapper'>
        <div className='app-wrapper-page'>
          { userKey != null ? <PageContentContainer/>  : <LoginFormContainer/>}
        </div>
      </div>
    )
  }
}
export default Page;
