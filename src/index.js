import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const Datass = (props) => {
  return (
    <message />,
    <dialogs />
    )

  };
  
  let message = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'you' },
    { id: 3, message: 'how are you mean' },
    { id: 4, message: 'how are you' },
    { id: 4, message: 'did you mean' },
    { id: 6, message: 'thank you man' },
  ];
  let dialogs = [
    { id: 1, name: 'Alexey' },
    { id: 2, name: 'Vika' },
    { id: 3, name: 'Olga' },
    { id: 4, name: 'Alena' },
    { id: 4, name: 'Natasha' },
    { id: 6, name: 'Inokentiy' },
  ];
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default Datass;