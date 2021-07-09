import React, { Component } from 'react';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/KN';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from "react-router-dom";
import TestConteiner from "./components/Navbar/Test/TestConteiner";
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersContainer from './components/Users/UsersContainer';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarConteiner from './components/Navbar/NavbarConteiner';
import KN from './components/Music/KN';
import LoginPage from './components/Login/login';
import { connect } from 'react-redux';
import { getAuthUserData } from './Redux/App-reducer';
import { compose } from 'redux';




class App extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <div className='app-wrapper'>
        <HeaderContainer path="" rener={ () => <HeaderContainer /> } />
        <NavbarConteiner path="" rener={ () => <NavbarConteiner /> } />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <DialogsConteiner /> } />
          <Route path="/profile/:userId?" render={ () => <ProfileConteiner /> } />
          <Route path='/users' render={ () => <UsersContainer /> } />
          <Route path='/Test' render={ () => <TestConteiner /> } />
          <Route path='/News' />
          <Route path='/login' render={ () => <LoginPage /> } />
          <Route path='/KN' render={ () => <KN /> } />
        </div>
      </div>
    );
  }
}
export default compose(withRouter(connect(null,
  { getAuthUserData })
  (App)));






//const App = () => {
//  return (
//    <div className='app-wrapper'>
//      <HeaderContainer path="" rener={ () => <HeaderContainer /> } />
//      <NavbarConteiner path="" rener={ () => <NavbarConteiner /> } />
//      <div className='app-wrapper-content'>
//        <Route path='/dialogs' render={ () => <DialogsConteiner /> } />
//        <Route path="/profile/:userId?" render={ () => <ProfileConteiner /> } />
//        <Route path='/users' render={ () => <UsersContainer /> } />
//        <Route path='/Test' render={ () => <TestConteiner /> } />
//        <Route path='/News' />
//        <Route path='/login' render={ () => <LoginPage /> } />
//        <Route path='/KN' render={ () => <KN /> } />
//      </div>
//    </div>
//  );
//}
//export default App;