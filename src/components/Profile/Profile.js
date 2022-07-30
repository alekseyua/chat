import React from 'react';
import MyPost from './MyPost/MyPost'
import styles from './profile.module.scss';

const Profile = () => {
  console.log(styles)
    return(
        <div>
          <div >
            <img className={styles['profile__img']} src='https://th.bing.com/th/id/R.c68dda9ba3e0f857241a7d45f2ebf211?rik=YslxNS1Q5FuEeg&pid=ImgRaw&r=0' alt='workboard pic'/>
          </div>
          
          <div>ava + discription</div>
          <MyPost />
        </div>
    )
}

export default Profile;