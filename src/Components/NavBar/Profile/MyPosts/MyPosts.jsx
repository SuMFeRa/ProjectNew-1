import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    //массив с постами
    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 1, message: "It my first post", likesCount: 23},
    ]

    let postsElements = posts
        .map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="20" rows="5"></textarea>
                </div>
                <div>
                    <button> Add Post</button>
                    <button> Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;