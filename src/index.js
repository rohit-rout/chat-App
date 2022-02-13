import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Reducer,initialState} from './Reducer';
import {StateProvider} from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} Reducer={Reducer} >
   <App />
   </StateProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);


