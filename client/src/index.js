// in this file where we are going to connect our react application to index html file 

import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import './index.css';

import App from "./App";
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store = {store}>
        <App/>
    </Provider>    
);


// what provider does is --> it is going to keep track of the store, which is that global state that allow us to access that store from anywhere 

