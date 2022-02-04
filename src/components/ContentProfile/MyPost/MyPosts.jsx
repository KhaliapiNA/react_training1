import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = function (props) {

    let postsData = [
        {id: 1, message: 'I am so ate', likesCount: 33},
        {id: 2, message: 'Leave place for dessert', likesCount: 23},
        {id: 3, message: 'It\'s not fair', likesCount: 13}
    ];
    return (
        <div>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
            <Post/>
        </div>

    );
}

export default MyPosts;