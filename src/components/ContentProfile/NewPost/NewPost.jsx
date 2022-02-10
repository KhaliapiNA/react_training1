import React from 'react';
import s from './NewPost.module.css';

const NewPost = function (props) {
    const newPostElement = React.createRef();
    let addPost = function(){
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div>
            <div className={s.post}>New post<br/>
                <textarea ref={newPostElement} cols="70" rows="5" placeholder="Please, start typing in here..."></textarea><br/>
                <button onClick={addPost}>Post</button>
                <button>Remove</button>
            </div>
        </div>
    );
}
export default NewPost;