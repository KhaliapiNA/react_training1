import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = function (props) {
    console.log(props.message);
    return (
        <div>
            <Post message='I am so ate'/>
            <Post message='Leave place for dessert'/>
            <Post/>
        </div>

    );
}

export default MyPosts;