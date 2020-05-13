import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from "./pages/root-store";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {initApp}  from  "lib/boot";
import * as serviceWorker from 'lib/serviceWorker';
import App from './App';
import 'style/index.css';
import 'lib/weui/weui.css';
import 'style/weui.css';
initApp();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
const startApp = () => {
    window.pages_history = []
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));
serviceWorker.unregister();
};
if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
  } else {
    startApp();
  }
