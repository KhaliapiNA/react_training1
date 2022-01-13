import React from 'react';
import s from './ContentProfile.module.css';
const ContentProfile = function () {
    return (
        <div className={s.content}>

            <div className={s.post}>
                <div className={s.post}>post1</div>
                <div className={s.post}>post2</div>
                <div className={s.post}>post3</div>
                <div className={s.post}>post4</div>
            </div>
        </div>);
}

export default ContentProfile;