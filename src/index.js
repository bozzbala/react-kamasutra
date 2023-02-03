import store from "./redux/store";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

reRenderEntireTree(store.getState())
store.subscribe(reRenderEntireTree);
