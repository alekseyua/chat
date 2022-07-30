import React from 'react';
import styles from './mypost.module.scss';
import Post from './Post/Post';

const MyPost = () => {

    return(
          <div className={styles['mypost__form-body']}>
            My post
            <div className={styles['mypost__form-posts']}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

            </div>
            <hr />
            <div className={styles['mypost__form']}>
              <textarea className={styles['mypost__form-input']}></textarea>
              <div className={styles['mypost__form-control']}>
                <button className={styles['mypost__form-btn']}>Add post</button>
                <button className={styles['mypost__form-btn']}>Remove</button>
              </div>
            </div>
              
          </div>

    )
}

export default MyPost;