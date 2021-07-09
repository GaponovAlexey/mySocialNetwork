import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebar from './sidebar-reducer';
import testReducer from './test-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducerNObag";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebar,
    testReducer: testReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;