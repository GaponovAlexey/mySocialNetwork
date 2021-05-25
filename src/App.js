import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import Test from "./components/Navbar/Test/test";


const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar render={() => <Navbar
        state={props.state.sidebar} />} />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <Dialogs
          state={props.state.dialogsPage} />}
          
          />
        <Route path='/profile' render={() => <Profile
          profilePage={props.state.profilePage}
          newPostText={props.state.newPostText}
          updateNewPostText={props.updateNewPostText}
          addPost={props.addPost} 
          
          />} />
        <Route path='/News' component={News} />
        <Route path='/Music' component={Music} />
        <Route path='/Test' render={() => <Test state={props.state.forTest} />} />
      </div>
    </div>
  );
}
export default App;