import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./state";


export let renderEntireTree = function (state) {
    ReactDOM.render(
        <React.StrictMode>
            <App posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} dialogs={state.messagesPage.dialogsData}
                 messages={state.messagesPage.messagesData} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

