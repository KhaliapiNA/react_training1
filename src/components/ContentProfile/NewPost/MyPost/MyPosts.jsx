import React from 'react';
import s from './MyPosts.module.css';
const MyPosts = function() {
    return (
            <div className={s.post}>
                <div className={s.post}>post1</div>
                <div className={s.post}>post2</div>
                <div className={s.post}>post3</div>
                <div className={s.post}>post4</div>
            </div>
        );
}

export default MyPosts;