import React from "react";
import s from "./Post.module.css";


const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://img.freepik.com/premium-vector/pro-gamer-avatar-logo_71220-49.jpg?w=2000" alt=""/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}
export default Post;