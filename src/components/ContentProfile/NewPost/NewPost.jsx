import React from 'react';
import s from './NewPost.module.css';


const NewPost = function (props) {
    const newPostElement = React.createRef();
    let addPost = function(){

        props.addPost();
        props.updateNewPostText = ('');
    }
    let onPostChange = function(props){
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={s.post}>New post<br/>
                <textarea ref={newPostElement} onChange={onPostChange}
                          updateNewPostText={props.updateNewPostText} value={props.newPostText}
                          cols="70" rows="5" placeholder="Please, start typing in here..." /><br/>
                <button onClick={addPost}>Post</button>
                <button>Remove</button>
            </div>
        </div>
    );
}
export default NewPost;