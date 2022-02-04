import React from 'react';
import s from './News.module.css';

const News = function () {
    return (
        <div>
            <div>
                <img className={s.img} src='https://desu.shikimori.one/system/screenshots/original/a35ca59b7a29a4a95cfd2877b679e0a477f9d401.jpg?1580316353'/>
            </div>
            <div>
                <img className={s.img} src='http://img.zlotracker.org/image/16401_1.jpg' />
            </div>
            <div>
                <img className={s.img} src='https://anime-chan.me/uploads/posts/2012-01/1326382185_31081701_yachaha.jpg' />
            </div>
        </div>);
}

export default News;