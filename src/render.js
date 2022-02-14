import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./state";
import {addPost} from './state';


export let renderEntireTree = function () {
    ReactDOM.render(
        <React.StrictMode>
            <App posts={state.profilePage.posts} dialogs={state.messagesPage.dialogsData}
                 messages={state.messagesPage.messagesData} addPosts={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

