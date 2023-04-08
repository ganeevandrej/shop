import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ApiOnlineStoreProvider } from "./components/apiOnlineStoreContext";

import { App } from './containers/App';

import { store } from "./store";

import "./styles/index.css";
import { ApiOnlineStore } from "./service";

const apiOnlineStore = new ApiOnlineStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <ApiOnlineStoreProvider value={ apiOnlineStore }>
                    <App />
                </ApiOnlineStoreProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

