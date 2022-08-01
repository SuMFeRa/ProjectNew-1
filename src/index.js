import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

//массив с постами
let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 0},
    {id: 1, message: "It my first post", likesCount: 23},
]

//массив диалогов
let dialogs = [
    {id: 1, name: "Dmitry"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Anna"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"}
]


//массив сообщений
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your"},
    {id: 3, message: "Yo"}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App posts={posts} dialogs={dialogs} messages={messages}/>
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
