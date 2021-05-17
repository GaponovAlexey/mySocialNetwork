import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Test from "./components/Navbar/Test/test";

let Somecompany = (props) => <Dialogs />; 

const App = (props) => {
  const posts = [
    { id: -2, message: 'hi how are you Alexey', likesCount: 12 },
    { id: -1, message: 'you', likesCount: 12 },
    { id: 0, message: 'how are you mean', likesCount: 12 },
    { id: 1, message: 'how are you', likesCount: 12 },
    { id: 1, message: 'what did you mean', likesCount: 12 },
    { id: 3, message: 'thank you man', likesCount: 12 },
  ];
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ Somecompany} />
          <Route path='/profile' render={ ( ) => <Profile posts={props.posts} />} />
          {/*<Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile}/>*/}
          <Route path='/News' component={News}/>
          <Route path='/Music' component={Music}/>
          <Route path='/Test' component={Test}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;