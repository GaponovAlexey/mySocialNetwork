import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebar from './sidebar-reducer';
import testReducer from './test-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebar: sidebar,
    testReducer: testReducer,
    usersPage: usersReducer,

});


let store = createStore(reducers);

window.store = store;

export default store;