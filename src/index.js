import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import state from './state';
import {addPost, updateNewPostText, subscriber} from './state';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));



const rerenderEntireTree = () => {

  root.render(
    <React.StrictMode>
    <Router>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </Router>
  </React.StrictMode>
);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

rerenderEntireTree()
subscriber(rerenderEntireTree)

reportWebVitals();
