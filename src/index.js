import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State';




const ManData = [
  { id: 1, name: 'Aleksey' },
  { id: 2, name: 'Sergey' },
  { id: 3, name: 'Churik' },
];
const WomanData = [
  { name: 'Viktoria', id: 1 },
  { name: 'Vikusya', id: 2 },
  { name: 'Vika', id: 3 },
]


ReactDOM.render(
  <React.StrictMode>
    <App appState={state} ManData={ManData} WomanData={WomanData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();