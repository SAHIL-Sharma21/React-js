import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//importing provider from react redux
import {Provider} from 'react-redux';
//importing store to use the store in thwe whole app
import {store} from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
  </Provider>
)
