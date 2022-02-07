import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Dialog = function (props) {

    let path = '/messages/' + props.id;
    return (
        <div>
            <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
        </div>
    );
}
const Message = function (props) {

    return (
        <div className={s.message}>{props.message}</div>
    );
}
const Messages = function (props) {
    let dialogsData = [
        {id: 'minako', name: 'Minako'},
        {id: 'rei', name: 'Rei'},
        {id: 'ami', name: 'Ami'},
        {id: 'makoto', name: 'Makoto'},
        {id: 'michiru', name: 'Michiru'}
    ];

    let messagesData = [
        {id: 1, message: 'A new department store has opened in the city'},
        {id: 2, message: 'Can we go?'},
        {id: 3, message: 'Sure'}
    ];

    let dialogsElement = dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElement = messagesData.map(m => <Message message={m.message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}
export default Messages;