import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import styles from './dialogs.module.scss';
import { addMessageActionCreater, updateMessageActionCreater } from '../../redux/messagesReducer';


const Dialogs = (props) => {

    const onNewMessageChange = (e) => {
        const text = e.target.value;
        props.dispatch(updateMessageActionCreater(text));
    }

    const onSendMessageClick = () => props.dispatch(addMessageActionCreater());


    const dialogsElements = props.dialogs.map(dialog => <DialogItem key={`dialog-${dialog.id}`} id={dialog.id} name={dialog.name} />)
    const messagesElements = props.messages.map(message => <Message key={`message-${message.id}`} name={message.name} id={message.id} message={message.message} />)

    return (
        <div className={styles['dialogs__body']}>

            <div className={styles['dialogs__menu']}>
                <h3>dialogs...</h3>
                <ul className={styles['dialogs__list']} >
                    {dialogsElements}
                </ul>

            </div>

            <div className={styles['dialogs__content']}>
                dialogs content
                <div className={styles['dialogs__content-form']}>
                    <ul className={styles['dialogs__content-dialogs']}>
                        {messagesElements}
                    </ul>
                </div>
                <hr />
                <div className={styles['dialogs__form']}>

                    <textarea
                        className={styles['dialogs__form-input']}
                        onChange={onNewMessageChange}
                        value={props.newMessageText}
                    ></textarea>

                    <div className={styles['dialogs__form-control']}>
                        <button className={styles['dialogs__form-btn']}  onClick={onSendMessageClick} >Add post</button>
                        <button className={styles['dialogs__form-btn']}>clear</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Dialogs;



