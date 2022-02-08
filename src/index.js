import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'I am so ate', likesCount: 33},
    {id: 2, message: 'Leave place for dessert', likesCount: 23},
    {id: 3, message: 'It\'s not fair', likesCount: 13}
];
let dialogsData = [
    {id: 'minako', name: 'Minako'},
    {id: 'rei', name: 'Rei'},
    {id: 'ami', name: 'Ami'},
    {id: 'makoto', name: 'Makoto'},
    {id: 'michiru', name: 'Michiru'}
];

let messagesData = [
    {id: 1, message: 'A new department store has opened in the city'},
    {id: 2, message: 'Can we go?'},
    {id: 3, message: 'Sure'}
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
