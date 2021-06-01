import React from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import Test from "./components/Navbar/Test/test";
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import MyPostsConteiner from './components/Profile/MyPosts/MyPostsConteiner';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsConteiner />} />
        <Route path='/profile' render={ () => <MyPostsConteiner />}/>
        <Route path='/News'  />
        <Route path='/Music'  />
        <Route path='/Test' />
      </div>
    </div>
  );
}
export default App;