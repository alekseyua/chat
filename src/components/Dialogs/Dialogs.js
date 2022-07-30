import React from 'react';
import styles from './dialogs.module.scss';

const Dialogs = (props) => {
    return (
        <div className={styles['dialogs__body']}>
            <div className={styles['dialogs__menu']}>
                <h3>dialogs...</h3>
                <ul className={styles['dialogs__list']} >
                    <li className={styles['dialogs__item']}>Alekseyuadnepr</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                    <li className={styles['dialogs__item']}>name users chat</li>
                </ul>
            </div>
            <div className={styles['dialogs__content']}>
                dialogs content
                <ul className={styles['dialogs__content-dialogs']}>
                    <li className={styles['dialogs-content__body']}>
                        <div className={styles['dialogs-content__avatar']}>
                            <img className={styles['dialogs-content__img-avatar']} src='https://th.bing.com/th/id/R.c04b017b6b9d1c189e15e6559aeb3ca8?rik=p7CsD4Hws%2frUyQ&pid=ImgRaw&r=0' />
                            <p className={styles['dialogs-content__nick-avatar']}>Alekseyuadnepr</p>
                        </div>
                        <div className={styles['dialogs-content__message']}>
                            Content dialogs users nickname Alekseyuadnepr
                        </div>
                    </li>
                    <li className={styles['dialogs-content__body']}>
                        <div className={styles['dialogs-content__avatar']}>
                            <img className={styles['dialogs-content__img-avatar']} src='https://th.bing.com/th/id/R.c04b017b6b9d1c189e15e6559aeb3ca8?rik=p7CsD4Hws%2frUyQ&pid=ImgRaw&r=0' />
                            <p className={styles['dialogs-content__nick-avatar']}>Alekseyuadnepr</p>
                        </div>
                        <div className={styles['dialogs-content__message']}>
                            Content dialogs users nickname Alekseyuadnepr
                        </div>
                    </li>
                    <li className={styles['dialogs-content__body']}>
                        <div className={styles['dialogs-content__avatar']}>
                            <img className={styles['dialogs-content__img-avatar']} src='https://th.bing.com/th/id/R.c04b017b6b9d1c189e15e6559aeb3ca8?rik=p7CsD4Hws%2frUyQ&pid=ImgRaw&r=0' />
                            <p className={styles['dialogs-content__nick-avatar']}>Alekseyuadnepr</p>
                        </div>
                        <div className={styles['dialogs-content__message']}>
                            Content dialogs users nickname Alekseyuadnepr
                        </div>
                    </li>
                    <li className={styles['dialogs-content__body']}>
                        <div className={styles['dialogs-content__avatar']}>
                            <img className={styles['dialogs-content__img-avatar']} src='https://th.bing.com/th/id/R.c04b017b6b9d1c189e15e6559aeb3ca8?rik=p7CsD4Hws%2frUyQ&pid=ImgRaw&r=0' />
                            <p className={styles['dialogs-content__nick-avatar']}>Alekseyuadnepr</p>
                        </div>
                        <div className={styles['dialogs-content__message']}>
                            Content dialogs users nickname Alekseyuadnepr
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;