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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
}
export default Messages;