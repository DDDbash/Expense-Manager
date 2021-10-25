import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default App;