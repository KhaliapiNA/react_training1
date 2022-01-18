import React from 'react';
import s from './NewPost.module.css';

const NewPost = function(){
    return(
        <div className={s.post}>
            <div className={s.post}>New post</div>
            <div className={s.post}>My post</div>
        </div>
    );
}
export default NewPost;