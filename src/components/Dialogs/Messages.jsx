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
    let newMessage = React.createRef();
let addMessage = function (){

    let message = newMessage.current.value;
    alert(message);
}

    let dialogsElement = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
    let messagesElement = props.messages.map(m => <Message message={m.message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea ref={newMessage} />
                <button onClick={addMessage}/>

            </div>
        </div>
    );
}
export default Messages;