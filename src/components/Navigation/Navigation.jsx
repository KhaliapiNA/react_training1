import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

//let classes = {
//    'nav' : 'Navigation_nav__1yFxm',
//   'item' : 'Navigation_item__NT8uV'
//};
const Navigation = function () {
    return (
        <nav className={s.navigation}>
            <div >
                <NavLink className={s.page} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={s.page} to="/messages">Messages</NavLink>
            </div>
            <div >
                <NavLink to="/news" className={s.page}>News</NavLink>
            </div>
            <div >
                <NavLink to="/music" className={s.page}>Music</NavLink>
            </div>
            <div >
                <NavLink to="settings" className={s.page}> Settings</NavLink>
            </div>
        </nav>);
}

export default Navigation;