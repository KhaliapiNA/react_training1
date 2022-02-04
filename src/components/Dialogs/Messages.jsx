import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = function (props){
    return(
        <div >
            <NavLink className={s.dialog} to='/messages/minako'> Minako</NavLink>
        </div>
    );
}
const Dialogs = function (props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog />

                <div >
                    <NavLink className={s.dialog} to='/messages/rei'>Rei</NavLink>
                </div>

                <div >
                    <NavLink className={s.dialog} to='/messages/ami}'> Ami</NavLink>
                </div>

                <div >
                    <NavLink className={s.dialog} to='/messages/makoto}'>Makoto</NavLink>
                </div>

                <div>
                    <NavLink className={s.dialog} to='/messages/michiru}'>Michiru</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>A new department store has opened in the city</div>
                <div className={s.message}>Can we go?</div>
                <div className={s.message}>Sure</div>
            </div>
        </div>
    );
}
export default Dialogs;