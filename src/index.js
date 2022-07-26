import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { stoore } from './redux/stoore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {stoore}>
            <App />
    </Provider>
   
  </React.StrictMode>
);

