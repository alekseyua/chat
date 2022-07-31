import React, { createRef, useRef } from 'react';
import styles from './mypost.module.scss';
import Post from './Post/Post';

const MyPost = (props) => {
  console.log(props)
  const ref = createRef();
  console.log(props.posts)
  const newPost = props.posts.reverse();
  console.log(newPost)
  const postsElements = newPost.map(post=> <Post key={`post-${post.id}`} id={post.id} likes={post.likes} message={post.message} image={post.image} />)
  
  const onPostChange = (e) =>{
    let text = e.target.value;
    props.updateNewPostText(text)
  }

  const addPost = ()=>props.addPost(ref.current.value);

    return(
          <div className={styles['mypost__form-body']}>
            My post
            <div className={styles['mypost__form-posts']}>
            { postsElements}
            </div>
            <hr />
            <div className={styles['mypost__form']}>
              
              <textarea 
                className={styles['mypost__form-input']} 
                value={props.newPostText}
                ref={ref}
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