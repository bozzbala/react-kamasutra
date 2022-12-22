import store from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)}/>
        </React.StrictMode>
    );
}

reRenderEntireTree(store.getState())
store.subscribe(reRenderEntireTree);
