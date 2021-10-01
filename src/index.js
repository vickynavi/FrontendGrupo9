import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/generics/Sidebar/Sidebar.css";

//import './assets/stylesheets/_bootstrap.scss'


/* The following line can be included in your src/index.js or App.js file */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
