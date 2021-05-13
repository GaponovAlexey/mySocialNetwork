import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile}/>
          <Route path='/News' component={News}/>
          <Route path='/Music' component={Music}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;