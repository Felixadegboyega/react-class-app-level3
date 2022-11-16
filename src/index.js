import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MyComponent} from './Home';
import Main from './Main';
import {MainRouter} from './router';
import {ConnectToBackend} from './ConnectToBackend';
import {Provider} from 'react-redux';
import {store} from './app/store';
import ClassBased from './ClassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter />
      {/* <ClassBased /> */}
      {/* <ConnectToBackend /> */}
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
