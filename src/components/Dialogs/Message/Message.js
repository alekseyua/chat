import React from 'react';

import styles from './message.module.scss';

const Message = (props) => {
    return (<li key={`message-${props.id}`} className={styles['dialogs-content__body']}>
        <div className={styles['dialogs-content__avatar']}>
            <img className={styles['dialogs-content__img-avatar']} src='https://th.bing.com/th/id/R.c04b017b6b9d1c189e15e6559aeb3ca8?rik=p7CsD4Hws%2frUyQ&pid=ImgRaw&r=0' />
            <p className={styles['dialogs-content__nick-avatar']}>{props.name}</p>
        </div>
        <div className={styles['dialogs-content__message']}>
            {props.message}
        </div>
    </li>
    )
}
export default Message;