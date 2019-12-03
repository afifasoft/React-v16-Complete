import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Provider is a component - made by react-redux library
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
