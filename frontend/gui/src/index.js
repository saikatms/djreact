import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore ,compose, applyMiddleware} from 'redux';
import reducer from './store/reducers/auth'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
// import registerServiceWorker from './registerServiceWorker'

// registerServiceWorker
const composeEnhances=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store=createStore(reducer,composeEnhances(
  applyMiddleware(thunk)
))

const app=(
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
  // <React.StrictMode>
    app,
  // </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
