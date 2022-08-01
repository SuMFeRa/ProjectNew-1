import React from "react";
import s from "./NotFound.module.css"

const NotFound = () => {
    return (
        <div className={s.error404}>
           <div>Error 404</div>
            <div>Страница не найдена</div>
        </div>
    )
}

export default NotFound;