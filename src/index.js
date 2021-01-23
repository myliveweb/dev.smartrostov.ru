import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './store/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveToLocalStorage, loadFromLocalStorage } from './store/localStorage'
import App from './App';
import 'fontsource-roboto';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(),)
  )

store.subscribe(() => saveToLocalStorage(store.getState()));

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app,
  document.getElementById('root')
);
