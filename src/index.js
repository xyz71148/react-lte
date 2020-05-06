import React from 'react';
import ReactDOM from 'react-dom';

const startApp = () => {
    window.pages_history = []
    ReactDOM.render(
        <div>index</div>
        , document.getElementById('root'));
};
if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
  } else {
    startApp();
  }
