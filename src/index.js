import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';



const posts = [
  { id: -2, message: 'hi how are you Alexey', likesCount: 12 },
  { id: -1, message: 'you', likesCount: 12 },
  { id: 0, message: 'how are you mean', likesCount: 12 },
  { id: 1, message: 'how are you', likesCount: 12 },
  { id: 1, message: 'what did you mean', likesCount: 12 },
  { id: 3, message: 'thank you man', likesCount: 12 },
];

const message = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'you' },
  { id: 3, message: 'how are you mean' },
  { id: 4, message: 'how are you' },
  { id: 4, message: 'did you mean' },
  { id: 6, message: 'thank you man' },
];
const dialogs = [
  { id: 1, name: 'Alexey' },
  { id: 2, name: 'Vika' },
  { id: 3, name: 'Olga' },
  { id: 4, name: 'Alena' },
  { id: 4, name: 'Natasha' },
  { id: 6, name: 'Inokentiy' },
];



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} message={message} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();