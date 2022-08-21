import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DialogsData = [
    {id: 1, username: "Aruzhan", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 2, username: "Arman", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 3, username: "Batyr", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 4, username: "Ayazhan", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 5, username: "Qayrat", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},

]

let MessagesData = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hi"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "I'm good thanks"}
]

let PostsData = [
    {id: 1, text: "Just got my new car. Going to drive around a town tonight. Join me up!", postTitle: "New car"},
    {id: 2, text: "That's cool", postTitle: "Done"},
    {id: 3, text: "Waiting in the queue for my new car documents...", postTitle: "Documents"},
    {id: 4, text: "New user!", postTitle: "Hello"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App dialogs={DialogsData} messages={MessagesData} posts={PostsData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
