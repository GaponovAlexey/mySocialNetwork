import React from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import TestConteiner from "./components/Test/TestConteiner";
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersContainer from './components/Users/UsersContainer';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarConteiner from './components/Navbar/NavbarConteiner';
import KN from './components/KN/KN';
import LoginPage from './components/Login/login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/appReducerNObag';
import { compose } from 'redux';
import Preolader from './components/common/Preloader/Preloader';
import One from './components/verstka/One';
import LearnJs from './components/Test/testJs/LearnJs'


import store from './Redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';




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
          <Route path='/LearnJs' render={ () => <LearnJs /> } />
          <Route path='/News' />
          <Route path='/login' render={ () => <LoginPage /> } />
          <Route path='/KN' render={ () => <KN /> } />
          <Route path='/one' render={ () => <One /> } />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})



let AppContainer = compose(
  withRouter(connect(mapStateToProps, { initializeApp })
    (App)));

const MainApp = (props) => {
  return <React.Fragment>
    <BrowserRouter>
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.Fragment>
}

export default MainApp;


