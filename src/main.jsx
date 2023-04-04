import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import rootReducer from './components/reducers'
import {Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
)
