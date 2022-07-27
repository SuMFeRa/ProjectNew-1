import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="" id="" cols="20" rows="5"></textarea>
                <button> Add Post</button>
                <button> Remove</button>
            </div>
            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;