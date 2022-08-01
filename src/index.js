import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));



const rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
    <Router>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </Router>
  </React.StrictMode>
);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)

reportWebVitals();

//e1MWO06nwkjGtJXklv0Amu:APA91bG7gs0FAfyBAYG41UlDQFH…-JeKweCUxFnIoGZrpBPypwRNezT7fvVGISrAuNCk9saJxL3yi
//e1MWO06nwkjGtJXklv0Amu:APA91bG7gs0FAfyBAYG41UlDQFH…-JeKweCUxFnIoGZrpBPypwRNezT7fvVGISrAuNCk9saJxL3yi