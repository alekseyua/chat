import React from 'react';
import { addPostActionCreater, updateNewPostText } from '../../../redux/profileReducer';
import Post from './Post/Post';
import styles from './mypost.module.scss';

const MyPost = (props) => {

  const postsElements = props.posts.map(post => <Post key={`post-${post.id}`} id={post.id} likes={post.likes} message={post.message} image={post.image} />)

  const onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostText(text))
  }

  const addPost = () => props.dispatch(addPostActionCreater())

  return (
    <div className={styles['mypost__form-body']}>
      My post
      <div className={styles['mypost__form-posts']}>
        {postsElements}
      </div>
      <hr />
      <div className={styles['mypost__form']}>

        <textarea
          className={styles['mypost__form-input']}
          value={props.newPostText}
          onChange={onPostChange}
        ></textarea>

        <div className={styles['mypost__form-control']}>
          <button className={styles['mypost__form-btn']} onClick={addPost}>Add post</button>
          <button className={styles['mypost__form-btn']}>Remove</button>
        </div>

      </div>

    </div>

  )
}

export default MyPost;
