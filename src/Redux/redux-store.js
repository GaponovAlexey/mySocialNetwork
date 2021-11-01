import {  combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebar from './sidebar-reducer';
import testReducer from './test-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-Reducer";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducerNObag";
import OneR from "./verska-reducer";
import toolkitSlice from '../components/Test/LearnJs/Js/toolkitSlice';
import reposReducer  from './axiosGit';
import counterSlice from './countReduxThink';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebar,
    testReducer: testReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    oneR: OneR,
    toolkit: toolkitSlice,
    repos: reposReducer,
    counter: counterSlice,
});


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

const store = configureStore ({
    reducer: reducers
})


//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;