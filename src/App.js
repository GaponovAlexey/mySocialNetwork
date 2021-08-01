import React from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
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
import TestConteiner from "./components/Test/testJs/TestConteiner";
import LearnReactjs from './components/Test/LearnJs/Learn/LearnReactjs';


import store from './Redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Study from './components/Test/LearnJs/Js/LearnJs';
import TestTitulRout from './components/Test/TitulRout';
import jsone from './components/Test/LearnJs/jsOne/one';




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
          <Route path='/base' render={ () => <TestConteiner /> } />
          <Route path='/ReactJs' render={ () => <LearnReactjs /> } />
          <Route path='/LearnJsx' render={ () => <TestTitulRout /> } />
          <Route path='/News' />
          <Route path='/login' render={ () => <LoginPage /> } />
          <Route path='/KN' render={ () => <KN /> } />
          <Route path='/one' render={ () => <One /> } />
          <Route path='/JS' component={ Study } />
          <Route path='/oneTwoJS' component={ jsone } />
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


