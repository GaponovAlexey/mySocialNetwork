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
        <Route path='/dialogs'
          render={() => <Dialogs
            //store={props.state.dialogsReducer}
            store={props.store}
            />}
            />
        <Route path='/profile'
          render={() => <Profile
            profilePage={props.state.profileReducer.posts}
            newPostText={props.state.profileReducer.newPostText}
            dispatch={props.dispatch}
            
            />} />
        <Route path='/News' component={News} />
        <Route path='/Music' component={Music} />
        <Route path='/Test'
          render={() => <Test
            state={props.state.testReducer}
            store={props.store}
            />} />
      </div>
    </div>
  );
}
export default App;