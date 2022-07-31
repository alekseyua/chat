import React from 'react';
import styles from './post.module.scss';

const Post = (props) => {

    return(
              <div key={props.id} className={styles['post-body']}>
                <div className={styles['post-avatar']}>
                  <img className={styles['post-avatar__img']} src={props.image} alt='avatar user'/>
                </div>
                  {props.message}
                <span>like: {props.likes}</span>
              </div>
    )
}

export default Post;