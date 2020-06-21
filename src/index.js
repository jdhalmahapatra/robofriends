import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import CardList from './CardList';
// import Card from './Card';
//import { robots } from './robots';

import App from './containers/App';
//import Hello from './Hello'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>  
  	<App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// //<App > 
//<Hello greetings='React is very good. It is quite interesting'/>
//Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
