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
                <a className={s.page} href="#">Profile</a>
            </div>
            <div>
                <a className={s.page} href="#">Messages</a>
            </div>
            <div >
                <a href="#" className={s.page}>News</a>
            </div>
            <div >
                <a href="#" className={s.page}>Music</a>
            </div>
            <div >
                <a href="#" className={s.page}> Settings</a>
            </div>
        </nav>);
}

export default Navigation;