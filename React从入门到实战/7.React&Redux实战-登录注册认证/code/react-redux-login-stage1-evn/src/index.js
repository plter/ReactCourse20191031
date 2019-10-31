import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import logger from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import rootReducer from "./reducers"


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , 
    document.getElementById('root'));