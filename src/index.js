import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import history from './history';

import App from './App';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>,
    document.getElementById('root')
);