import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import reduxThunk from "redux-thunk"


import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);


