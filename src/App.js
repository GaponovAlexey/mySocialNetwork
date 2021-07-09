import React from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import TestConteiner from "./components/Navbar/Test/TestConteiner";
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersContainer from './components/Users/UsersContainer';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarConteiner from './components/Navbar/NavbarConteiner';
import KN from './components/KN/KN';
import LoginPage from './components/Login/login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/App-reducer';
import { compose } from 'redux';
import Preolader from './components/common/Preloader/Preloader';




class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preolader />
    }

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


const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})



export default compose(withRouter(connect(mapStateToProps,
  { initializeApp })
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