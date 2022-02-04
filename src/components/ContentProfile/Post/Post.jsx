import React from 'react';
import s from './Post.module.css';

const Post = function (props) {
    return (
        <div className={s.post}>
            <img className={s.icon} src="https://i.pinimg.com/236x/91/e7/6d/91e76d0922418adacbd15a26e2d86fff.jpg"/>
            {props.message}<br/>
            <span>{props.likesCount} <img src='https://pngicon.ru/file/uploads/serdce.png' className={s.like}/></span>
        </div>

    );
}

export default Post;