import React from 'react';
import s from './NewPost.module.css';

const NewPost = function (props) {
    return (
        <div>
            <div className={s.post}>New post<br/>
                <textarea cols="70" rows="5" placeholder="Please, start typing in here..."></textarea><br/>
                <button>Post</button>
                <button>Remove</button>
            </div>
        </div>
    );
}
export default NewPost;