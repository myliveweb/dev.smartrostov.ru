import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './store/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveToLocalStorage, loadFromLocalStorage } from './store/localStorage'
import logger from 'redux-logger';
import { rootWatcher } from './store/saga'
import App from './App';
import 'fontsource-roboto';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware),)
)

  sagaMiddleware.run(rootWatcher)

store.subscribe(() => saveToLocalStorage(store.getState()));

/*const appStrictMode = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)*/

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app,
  document.getElementById('root')
);
