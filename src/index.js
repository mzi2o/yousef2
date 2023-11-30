import React, { Fragment } from 'react';
// import { createRoot } from 'react-dom/client';

import { createRoot } from 'react-dom/client';
import './index.css';
import Vlog from './Vlog-SoftSkills/Accueil';
import { Provider } from 'react-redux';
import store from './Vlog-SoftSkills/Redux/store';

// Remove the BrowserRouter from here

// Wrap your application with Provider (for Redux)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Vlog />
  </Provider>
  
 
);
