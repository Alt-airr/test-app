import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Page from "./components/Page";

class App extends React.Component {

  render() {
    return (
      <div className='app-wrapper'>
        <Header/>
        <div className='app-wrapper-page'>
          <Route path='/'
                 render={ () =>  <Page/>  }/>
        </div>
      </div>
    )
  }
}
export default App;
