import React from 'react';
import ReactDOM from 'react-dom';
import './style/weui.css';

import * as serviceWorker from './serviceWorker';

const startApp = () => {
    ReactDOM.render(
        <div>app1</div>
        , document.getElementById('root'));
serviceWorker.unregister();
};
if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
  } else {
    startApp();
  }
