import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { Store } from './app/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={Store}>
  <App/>
 </Provider>
);

//  we are using the :

// context api(react)
// firebase (user authentication +database)
// react js for frontend
// react router
// firebase hosting to deploy it live




// we are using the react-router-dom 43:00


// we are installing npm i react-currency -format