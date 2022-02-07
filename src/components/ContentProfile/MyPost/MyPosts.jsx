import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = function (props) {

    let postsData = [
        {id: 1, message: 'I am so ate', likesCount: 33},
        {id: 2, message: 'Leave place for dessert', likesCount: 23},
        {id: 3, message: 'It\'s not fair', likesCount: 13}
    ];
    let pots = postsData.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    return (
        <div>
            {pots}
            <Post/>
        </div>

    );
}

export default MyPosts;