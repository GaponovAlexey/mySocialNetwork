import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";
import Test from "./components/Navbar/Test/test";

//let Somecompany = (props) => <Dialogs dialogs={props.dialogs} message={props.message} />; 

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs
            dialogs={props.appState.dialogs}
            message={props.appState.message} />} />
          <Route path='/profile' render={() => <Profile
            posts={props.appState.posts} />} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Test' render={() => <Test WomanData={props.WomanData} ManData={props.ManData} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;