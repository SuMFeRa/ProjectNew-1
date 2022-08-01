import React from "react";
import s from "./../Dialogs.module.css";

// компоненты для колонки сообщений
const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message;