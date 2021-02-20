import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FirebaseAppProvider } from 'reactfire';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5UXutMWgOAfpzPGipte3NvCh41tsY5k0",
  authDomain: "monigrow-a9692.firebaseapp.com",
  projectId: "monigrow-a9692",
  storageBucket: "monigrow-a9692.appspot.com",
  messagingSenderId: "959220826867",
  appId: "1:959220826867:web:ce706c64c76c5b6016ed86",
  measurementId: "G-VSW7L2XFSJ"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
