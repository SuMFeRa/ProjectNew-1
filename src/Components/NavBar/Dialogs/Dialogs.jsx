import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


// компоненты для колонки диалогов
const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

// компоненты для колонки сообщений
const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

// 2 колонки диалоги и сообщения
const Dialogs = (props) => {

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

    // перебор массива диалогов .map
    let dialogsElements = dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    // перебор массива сообщений .map
    let messagesElements = messages
        .map(message => <Message key={message.id} message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;