import React from "react";
import "./Profile.module.css";

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img
                    src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q= "
                    alt=""/>
            </div>
            <div>
                ava + descripyion
                <img src="" alt=""/>
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className="posts">
                    <div className="item">
                        Post 1
                    </div>
                    <div className="item">
                        Post 2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;