import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './dialogItem.module.scss';

const DialogItem = (props) => {
    return (
        <li key={'k' + props.id} className={styles['dialogs__item']}>
            <NavLink  to={`/dialogs/${props.id}`} >{props.name}</NavLink>
        </li>
    )
}
 
export default DialogItem;