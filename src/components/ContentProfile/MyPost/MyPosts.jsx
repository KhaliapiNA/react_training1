import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = function (props) {

    let postsElements = props.posts.map( p => <Post id={p.id} post={p.post} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef();
    let addPost = function (props) {
        props.addPost();
        props.updateNewPostText = ('');
    }
    let onPostChange = (props) => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (<div>
            <div>
            <div className={s.post}>New post<br/>
                <textarea ref={newPostElement} onChange={onPostChange}
                          updateNewPostText={props.updateNewPostText} value={props.newPostText}
                          cols="70" rows="5" placeholder="Please, start typing in here..." /><br/>
                <button onClick={addPost}>Post</button>
                <button>Remove</button>
            </div>
        </div>
        <div>
            {postsElements}
            <Post/>
        </div>
        </div>
    );
}

export default MyPosts;
