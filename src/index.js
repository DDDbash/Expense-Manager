import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import App from "./App";
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
// import './firebase/firebase';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  , document.getElementById("root")
);