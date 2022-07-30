import React from 'react';
import styles from './post.module.scss';

const Post = (props) => {

    return(
              <div className={styles['post-body']}>
                <div className={styles['post-avatar']}>
                  <img className={styles['post-avatar__img']} src='https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png' alt='avatar user'/>
                </div>
                post 1
                <span>like</span>
              </div>
    )
}

export default Post;