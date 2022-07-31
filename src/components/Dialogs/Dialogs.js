import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

import styles from './dialogs.module.scss';


const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map(dialog=> <DialogItem key={`dialog-${dialog.id}`} id={dialog.id} name={dialog.name} />)
    const messagesElements = props.messages.map(message=> <Message key={`message-${message.id}`} name={message.name} id={message.id} message={message.message} />)

    return (
        <div className={styles['dialogs__body']}>
            <div className={styles['dialogs__menu']}>
                <h3>dialogs...</h3>
                <ul className={styles['dialogs__list']} >
                    { dialogsElements }
                </ul>
               
            </div>
            <div className={styles['dialogs__content']}>
                dialogs content
                <ul className={styles['dialogs__content-dialogs']}>
                    { messagesElements }
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;



