import React from 'react';
import s from './Navigation.module.css';

//let classes = {
//    'nav' : 'Navigation_nav__1yFxm',
//   'item' : 'Navigation_item__NT8uV'
//};
const Navigation = function () {
    return (
        <nav className={s.navigation}>
            <div >
                <a className={s.page} href="/profile">Profile</a>
            </div>
            <div>
                <a className={s.page} href="/messages">Messages</a>
            </div>
            <div >
                <a href="/news" className={s.page}>News</a>
            </div>
            <div >
                <a href="/music" className={s.page}>Music</a>
            </div>
            <div >
                <a href="settings" className={s.page}> Settings</a>
            </div>
        </nav>);
}

export default Navigation;