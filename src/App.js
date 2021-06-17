import React from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";
import TestConteiner from "./components/Navbar/Test/TestConteiner";
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersContainer from './components/Users/UsersContainer';
import ProfileConteiner from './components/Profile/ProfileConteiner';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsConteiner />} />
        <Route path='/profile' render={ () => <ProfileConteiner />}/>
        <Route path='/users' render={ () => <UsersContainer />}/>
        <Route path='/Test' render={() => <TestConteiner />}/>
        <Route path='/News'  />
        <Route path='/Music'  />
      </div>
    </div>
  );
}
export default App;