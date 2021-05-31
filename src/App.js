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


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar render={() => <Navbar
        state={props.state.sidebar} />} />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsConteiner store={props.store} />}/>
        <Route path='/profile'
          render={() => <Profile store={props.store} />} />
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