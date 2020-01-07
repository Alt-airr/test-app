import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import contactsReducer from "./contacts-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from 'redux-thunk';
import {loadState, saveState} from "../localStorage/localstorage";
import throttle from 'lodash.throttle';

let reducers = combineReducers({
  mainPage: mainReducer,
  contactsPage: contactsReducer,
  auth: authReducer
});


const persistedState = loadState();

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));


store.subscribe(throttle(() => {
  saveState({
    userKey: store.getState().auth.userKey
  });
}, 1000))

window.store = store;


export default store;